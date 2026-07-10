import { Router } from "express";
import Stripe from "stripe";
import config from "../../config";
import { prisma } from "../../lib/prisma";
import { stripe } from "../../lib/stripe";
const router = Router();
const handleCheckoutSessionCompleted = async (session, status = "completed") => {
    const paymentId = session.metadata?.paymentId;
    const rentalId = session.metadata?.rentalId;
    if (!paymentId || !rentalId) {
        console.log(`Checkout session ${session.id} is missing payment metadata`);
        return;
    }
    const payment = await prisma.payment.findUnique({ where: { id: paymentId } });
    if (!payment) {
        console.log(`Payment not found for checkout session ${session.id}`);
        return;
    }
    await prisma.$transaction(async (tx) => {
        await tx.payment.update({
            where: { id: payment.id },
            data: {
                status: status === "completed" ? "completed" : "failed",
                transactionId: typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id || session.id,
                paymentMethod: "card",
            },
        });
        if (status === "completed") {
            await tx.rentalrequest.update({
                where: { id: rentalId },
                data: {
                    status: "active_completed",
                },
            });
        }
    });
};
router.post("/webhook", async (req, res) => {
    const signature = req.headers["stripe-signature"];
    if (!signature) {
        return res.status(400).send("Missing stripe signature");
    }
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, signature, config.stripe_webhook_secret);
    }
    catch (error) {
        console.error("Stripe webhook verification failed", error);
        return res.status(400).send("Webhook verification failed");
    }
    try {
        switch (event.type) {
            case "checkout.session.completed": {
                const session = event.data.object;
                await handleCheckoutSessionCompleted(session, "completed");
                break;
            }
            case "checkout.session.expired":
            case "checkout.session.async_payment_failed": {
                const session = event.data.object;
                await handleCheckoutSessionCompleted(session, "failed");
                break;
            }
            case "payment_intent.succeeded": {
                const paymentIntent = event.data.object;
                const payment = await prisma.payment.findFirst({
                    where: { stripePaymentIntentId: paymentIntent.id },
                });
                if (payment) {
                    await prisma.payment.update({
                        where: { id: payment.id },
                        data: {
                            status: "completed",
                            transactionId: paymentIntent.id,
                            paymentMethod: typeof paymentIntent.payment_method === "string" ? paymentIntent.payment_method : "card",
                        },
                    });
                }
                break;
            }
            case "payment_intent.payment_failed": {
                const paymentIntent = event.data.object;
                const payment = await prisma.payment.findFirst({
                    where: { stripePaymentIntentId: paymentIntent.id },
                });
                if (payment) {
                    await prisma.payment.update({
                        where: { id: payment.id },
                        data: {
                            status: "failed",
                        },
                    });
                }
                break;
            }
            default:
                break;
        }
        res.json({ received: true });
    }
    catch (error) {
        console.error("Stripe webhook handler failed", error);
        res.status(500).json({ received: false, error: "Webhook handler failed" });
    }
});
export const webhookRoute = router;
//# sourceMappingURL=webhook.route.js.map