import express from "express";
import { checkPlantSafety, getScanHistory, getScanById, getCommunitySightings, searchPlants, getAllPlants } from "../controllers/safety.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/check", authMiddleware, checkPlantSafety);
router.get("/history", authMiddleware, getScanHistory);
router.get("/history/:id", authMiddleware, getScanById);
router.get("/community-sightings", authMiddleware, getCommunitySightings);
router.get("/search", authMiddleware, searchPlants);
router.get("/plants", authMiddleware, getAllPlants);

export default router;
