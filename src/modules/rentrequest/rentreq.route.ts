import { Router } from "express";
import { rentrequestController } from "./rentreq.controllert";
import { auth } from "../../middleware/auth";
import { usersRole } from "../../../generated/prisma/enums";


const router= Router();


router.post("/request", auth(usersRole.tenant),rentrequestController.createRentRuquest)


export const rentrequestRoute=router;