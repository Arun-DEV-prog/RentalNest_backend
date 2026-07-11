import { prisma } from "../../lib/prisma.js";

const createReview = async (userId: string, payload: { rentalId: string; rating: number; comment?: string }) => {
  const rental = await prisma.rentalrequest.findUniqueOrThrow({
    where: { id: payload.rentalId },
    include: {
      properties: true,
    },
  });

  if (rental.userId !== userId) {
    throw new Error("Unauthorized: This rental does not belong to you");
  }

  if (rental.status !== "active_completed") {
    throw new Error("You can only review a completed rental");
  }

  const existingReview = await prisma.review.findFirst({
    where: {
      rentalId: payload.rentalId,
      userId,
    },
  });

  if (existingReview) {
    throw new Error("You already reviewed this rental");
  }

  if (payload.rating < 1 || payload.rating > 5) {
    throw new Error("Rating must be between 1 and 5");
  }

  const review = await prisma.review.create({
    data: {
      rentalId: payload.rentalId,
      userId,
      propertyId: rental.properties_id,
      rating: payload.rating,
      comment: payload.comment?.trim() || null,
    },
    include: {
      rental: {
        include: {
          properties: true,
        },
      },
    },
  });

  return review;
};

export const reviewService = {
  createReview,
};
