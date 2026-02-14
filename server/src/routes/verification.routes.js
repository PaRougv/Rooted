import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { User , DashboardUser } from "../controllers/verification.controller.js";

const router = express.Router();

router.get("/me" , authMiddleware ,  User)
router.get("/dashboard" , authMiddleware , DashboardUser)

export default router