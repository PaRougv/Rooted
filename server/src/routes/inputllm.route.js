import express from "express";
import { createProfile, updateProfile, deleteProfile, getProfiles, llmOutput } from "../controllers/health.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get('/takeuser', authMiddleware, getProfiles);
router.post('/takeuser', authMiddleware, createProfile);
router.put('/takeuser/:id', authMiddleware, updateProfile);
router.delete('/takeuser/:id', authMiddleware, deleteProfile);
router.post('/summary', authMiddleware, llmOutput);

export default router;
