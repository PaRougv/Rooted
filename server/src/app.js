import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import verificationRoutes from "./routes/verification.routes.js";
import userDetailRoutes from "./routes/inputllm.route.js";
import cameraRoutes from './routes/camera.router.js'
import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/verification", verificationRoutes);
app.use("/api/input", userDetailRoutes);
app.use('/camera' , cameraRoutes)

export default app;