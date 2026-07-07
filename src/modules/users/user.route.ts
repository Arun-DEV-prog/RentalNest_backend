import { Router } from "express";
import { userController } from "./user.controller";
import { usersRole } from "../../../generated/prisma/enums";
import { auth } from "../../middleware/auth";


const router= Router();





router.post('/register', userController.createUser)
router.get("/me", auth(usersRole.tenant, usersRole.landlord),  userController.getMe)



export const userRoute=router