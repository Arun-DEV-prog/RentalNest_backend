import { Router } from "express";
import { adminController } from "./admin.controller.js";
import { auth } from "../../middleware/auth.js";
import { usersRole } from "@prisma/client";

const router = Router();

// All admin routes require admin role
router.get("/users", auth(usersRole.admin), adminController.getAllUsers);
router.patch("/users/:id", auth(usersRole.admin), adminController.updateUserStatus);

router.get("/properties", auth(usersRole.admin), adminController.getAllProperties);
router.get("/rentals", auth(usersRole.admin), adminController.getAllRentals);

export const adminRoute = router;
