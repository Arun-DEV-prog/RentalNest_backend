import { Router } from "express";
import { rentrequestController } from "./rentreq.controllert";
import { auth } from "../../middleware/auth";
import { usersRole } from "../../../generated/prisma/enums";


const router= Router();


router.post("/", auth(usersRole.tenant),rentrequestController.createRentRuquest)
router.get("/", auth(usersRole.tenant), rentrequestController.getUserRental)


export const rentrequestRoute=router;