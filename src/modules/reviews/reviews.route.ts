import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { usersRole } from "@prisma/client";
import { reviewController } from "./reviews.controller.js";

const router = Router();

router.post("/", auth(usersRole.tenant), reviewController.createReview);

export const reviewRoute = router;
