import { Router } from "express";
import { rentrequestController } from "./rentreq.controllert.js";
import { auth } from "../../middleware/auth.js";
import { usersRole } from "@prisma/client";


const router= Router();


router.post("/", auth(usersRole.tenant),rentrequestController.createRentRuquest)
router.get("/", auth(usersRole.tenant), rentrequestController.getUserRental)
router.get("/:id", auth(usersRole.tenant), rentrequestController.getRentRuquestID)



export const rentrequestRoute=router;