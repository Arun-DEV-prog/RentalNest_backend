import { Router } from "express";
import { rentrequestController } from "./rentreq.controllert";
import { auth } from "../../middleware/auth";
import { usersRole } from "../../../generated/prisma/enums";
const router = Router();
router.post("/", auth(usersRole.tenant), rentrequestController.createRentRuquest);
router.get("/", auth(usersRole.tenant), rentrequestController.getUserRental);
router.get("/:id", auth(usersRole.tenant), rentrequestController.getRentRuquestID);
export const rentrequestRoute = router;
//# sourceMappingURL=rentreq.route.js.map