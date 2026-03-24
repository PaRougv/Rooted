import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import verificationRoutes from "./routes/verification.routes.js";
import userDetailRoutes from "./routes/inputllm.route.js";
import cameraRoutes from './routes/camera.router.js'
import safetyRoutes from './routes/safety.routes.js'
import cors from "cors";

const app = express();

app.use(cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. same-origin, Postman) or from localhost on any port
      if (!origin || /^http:\/\/localhost(:\d+)?$/.test(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    credentials: true
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/verification", verificationRoutes);
app.use("/api/input", userDetailRoutes);
app.use('/camera' , cameraRoutes)
app.use('/api/safety', safetyRoutes)

export default app;