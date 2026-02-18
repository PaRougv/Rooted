import express from "express";
import { takeUser , llmOutput, getUserHealth } from "../controllers/health.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/takeuser' , authMiddleware , takeUser)
router.get('/takeuser' , authMiddleware , getUserHealth)

export default router;
