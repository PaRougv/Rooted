import express from "express";
import { chatWithAI } from "../controllers/chat.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/message", authMiddleware, chatWithAI);

export default router;
