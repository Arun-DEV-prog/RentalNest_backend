import { Router } from "express";
import { userController } from "./user.controller.js";
import { usersRole } from "@prisma/client";
import { auth } from "../../middleware/auth.js";


const router= Router();





router.post('/register', userController.createUser)
router.get("/me", auth(usersRole.tenant, usersRole.landlord),  userController.getMe)



export const userRoute=router