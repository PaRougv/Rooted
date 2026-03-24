import express from "express";
import { checkPlantSafety, getScanHistory, getScanById } from "../controllers/safety.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/check", authMiddleware, checkPlantSafety);
router.get("/history", authMiddleware, getScanHistory);
router.get("/history/:id", authMiddleware, getScanById);

export default router;
