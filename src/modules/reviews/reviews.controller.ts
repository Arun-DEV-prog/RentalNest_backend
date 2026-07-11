import type { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { reviewService } from "./reviews.service.js";

const createReview = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.users?.id;
  const payload = req.body as { rentalId?: string; rating?: number; comment?: string };

  if (!userId) {
    throw new Error("User is required");
  }

  if (!payload.rentalId) {
    throw new Error("Rental ID is required");
  }

  if (typeof payload.rating !== "number") {
    throw new Error("Rating is required");
  }

  const review = await reviewService.createReview(userId, {
    rentalId: payload.rentalId,
    rating: payload.rating,
    ...(payload.comment ? { comment: payload.comment } : {}),
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Review created successfully",
    data: review,
  });
});

export const reviewController = {
  createReview,
};
