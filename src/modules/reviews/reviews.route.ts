import { Router } from "express";
import { auth } from "../../middleware/auth";
import { usersRole } from "../../../generated/prisma/enums";
import { reviewController } from "./reviews.controller";

const router = Router();

router.post("/", auth(usersRole.tenant), reviewController.createReview);

export const reviewRoute = router;
