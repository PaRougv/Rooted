import express from "express";
import { login , logout , register, forgotPassword, resetPassword } from "../controllers/auth.controller.js";
import { authRateLimit, passwordResetRateLimit } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login" , authRateLimit, login);
router.post("/register" , authRateLimit, register);
router.get("/logout" , logout);
router.post("/forgot-password", passwordResetRateLimit, forgotPassword);
router.post("/reset-password", passwordResetRateLimit, resetPassword);

export default router;
