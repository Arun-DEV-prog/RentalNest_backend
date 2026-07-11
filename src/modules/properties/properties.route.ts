import { Router } from "express";
import { propertiesController } from "./properties.controller.js";

const router = Router();

router.get("/", propertiesController.getAllProperties);
router.get("/categories", propertiesController.getAllCategories);
router.get("/:id", propertiesController.getPropertyById);

export const propertiesRoute = router;
