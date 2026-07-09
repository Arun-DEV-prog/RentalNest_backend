import { Router } from "express";
import { adminController } from "./admin.controller";
import { auth } from "../../middleware/auth";
import { usersRole } from "../../../generated/prisma/enums";
const router = Router();
// All admin routes require admin role
router.get("/users", auth(usersRole.admin), adminController.getAllUsers);
router.patch("/users/:id", auth(usersRole.admin), adminController.updateUserStatus);
router.get("/properties", auth(usersRole.admin), adminController.getAllProperties);
router.get("/rentals", auth(usersRole.admin), adminController.getAllRentals);
export const adminRoute = router;
//# sourceMappingURL=admin.route.js.map