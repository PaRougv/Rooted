import express from "express";
import { takeUser , llmOutput } from "../controllers/health.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/takeuser' , authMiddleware , takeUser)

export default router;