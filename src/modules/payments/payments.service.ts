import type Stripe from "stripe";
import { prisma } from "../../lib/prisma";
import { stripe } from "../../lib/stripe";
import config from "../../config";

const getAppBaseUrl = () => {
  const appUrl = config.app_url?.trim();
  if (!appUrl) {
    return "http://localhost:5000";
  }

  return appUrl.startsWith("http://") || appUrl.startsWith("https://")
    ? appUrl
    : `https://${appUrl}`;
};

const createPaymentCheckout = async (userId: string, rentalId: string) => {
  const user = await prisma.users.findUniqueOrThrow({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
    },
  });

  const rental = await prisma.rentalrequest.findUniqueOrThrow({
    where: { id: rentalId },
    include: {
      properties: true,
      user: true,
    },
  });

  if (rental.userId !== userId) {
    throw new Error("Unauthorized: This rental request does not belong to you");
  }

  if (rental.status !== "approved") {
    throw new Error(`Rental request must be approved before payment. Current status: ${rental.status}`);
  }

  const existingPayment = await prisma.payment.findUnique({
    where: { rentalId },
  });

  if (existingPayment && existingPayment.status === "completed") {
    throw new Error("Payment already completed for this rental");
  }

  let stripeCustomerId: string | undefined;

  try {
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
      ...(user.phone ? { phone: user.phone } : {}),
      metadata: { userId: user.id },
    });
    stripeCustomerId = customer.id;
  } catch (error) {
    console.warn("Stripe customer creation failed, continuing without a customer reference:", error);
  }

  const paymentAmount = Math.round(Number(rental.properties.rent) * 100);

  let payment = existingPayment;

  if (!payment) {
    payment = await prisma.payment.create({
      data: {
        rentalId,
        userId,
        amount: Number(rental.properties.rent),
        currency: "usd",
        status: "pending",
      },
    });
  }

  const baseUrl = getAppBaseUrl();
  const session = await stripe.checkout.sessions.create({
    ...(stripeCustomerId ? { customer: stripeCustomerId } : {}),
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: rental.properties.title || "Rental Payment",
            description: `Rental payment for ${rental.properties.address}`,
            images: rental.properties.images ? [rental.properties.images] : [],
          },
          unit_amount: paymentAmount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    payment_method_types: ["card"],
    success_url: `${baseUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}&rental_id=${rentalId}`,
    cancel_url: `${baseUrl}/payment/cancel?rental_id=${rentalId}`,
    metadata: {
      userId,
      rentalId,
      paymentId: payment.id,
    },
  });

  await prisma.payment.update({
    where: { id: payment.id },
    data: {
      stripePaymentIntentId: session.id,
      status: "processing",
    },
  });

  return {
    checkoutUrl: session.url,
    sessionId: session.id,
    paymentId: payment.id,
    rentalId,
    amount: rental.properties.rent,
  };
};

const verifyPayment = async (sessionId: string): Promise<Stripe.Checkout.Session> => {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["payment_intent"],
  });

  if (!session.metadata?.paymentId || !session.metadata?.rentalId) {
    throw new Error("Invalid session metadata");
  }

  const paymentId = session.metadata.paymentId as string;
  const rentalId = session.metadata.rentalId as string;

  await prisma.$transaction(async (tx) => {
    if (session.payment_status === "paid") {
      const paymentIntentId =
        typeof session.payment_intent === "string"
          ? session.payment_intent
          : session.payment_intent?.id;

      await tx.payment.update({
        where: { id: paymentId },
        data: {
          status: "completed",
          transactionId: paymentIntentId || session.id,
          paymentMethod: "card",
        },
      });

      await tx.rentalrequest.update({
        where: { id: rentalId },
        data: {
          status: "active_completed",
        },
      });
    } else {
      await tx.payment.update({
        where: { id: paymentId },
        data: {
          status: "failed",
        },
      });
    }
  });

  return session;
};

const getUserPayments = async (userId: string, filters: Record<string, unknown> = {}) => {
  const { page = "1", limit = "10", status } = filters;
  const skip = (Number(page) - 1) * Number(limit);
  const take = Number(limit);

  const where: Record<string, unknown> = { userId };

  if (status) {
    where.status = status;
  }

  const [total, payments] = await Promise.all([
    prisma.payment.count({ where }),
    prisma.payment.findMany({
      where,
      include: {
        rental: {
          include: {
            properties: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
      skip,
      take,
      orderBy: [{ created_at: "desc" }],
    }),
  ]);

  return {
    data: payments,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      pages: Math.ceil(total / Number(limit)),
    },
  };
};

const getPaymentById = async (userId: string, paymentId: string) => {
  const payment = await prisma.payment.findUniqueOrThrow({
    where: { id: paymentId },
    include: {
      rental: {
        include: {
          properties: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              phone: true,
            },
          },
        },
      },
    },
  });

  if (payment.userId !== userId) {
    throw new Error("Unauthorized: Cannot access this payment");
  }

  return payment;
};

export const paymentService: {
  createPaymentCheckout: typeof createPaymentCheckout;
  verifyPayment: typeof verifyPayment;
  getUserPayments: typeof getUserPayments;
  getPaymentById: typeof getPaymentById;
} = {
  createPaymentCheckout,
  verifyPayment,
  getUserPayments,
  getPaymentById,
};
