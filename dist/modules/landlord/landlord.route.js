import { Router } from "express";
import { landlordController } from "./landlord.controller";
import { auth } from "../../middleware/auth";
import { usersRole } from "../../../generated/prisma/enums";
const router = Router();
router.post("/properties", auth(usersRole.landlord), landlordController.createLandlord);
router.put("/properties/:id", auth(usersRole.landlord), landlordController.updatedProperties);
router.delete("/properties/:id", auth(usersRole.landlord), landlordController.deletedProperties);
router.get("/requests", auth(usersRole.landlord), landlordController.getRentalRequests);
router.patch("/requests/:id", auth(usersRole.landlord), landlordController.approveOrRejectRequest);
export const landlordRoute = router;
//# sourceMappingURL=landlord.route.js.map