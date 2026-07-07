import { Router } from "express";
import { landlordController } from "./landlord.controller";
import { auth } from "../../middleware/auth";
import { usersRole } from "../../../generated/prisma/enums";




const router=Router();



router.post("/properties", auth(usersRole.landlord), landlordController.createLandlord)



export const landlordRoute=router;
