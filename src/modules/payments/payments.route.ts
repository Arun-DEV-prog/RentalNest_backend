import { Router } from "express";
import { auth } from "../../middleware/auth";
import { usersRole } from "../../../generated/prisma/enums";
import { paymentController } from "./payments.controller";

const router = Router();

router.post("/create", auth(usersRole.tenant), paymentController.createPayment);
router.post("/confirm", auth(usersRole.tenant), paymentController.confirmPayment);
router.get("/", auth(usersRole.tenant), paymentController.getUserPayments);
router.get("/:id", auth(usersRole.tenant), paymentController.getPaymentById);

export const paymentRoute = router;
