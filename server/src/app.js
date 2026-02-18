import express from 'express';
import CookieParser from 'cookie-parser'
import authRoutes from "./routes/auth.routes.js";
import verificationRoutes from "./routes/verification.routes.js"
import userDetailRoutes from "./routes/inputllm.route.js"
import cors from "cors"

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CookieParser())
app.use("/api/auth", authRoutes);
app.use("/api/verification" , verificationRoutes)
app.use("/api/input" , userDetailRoutes)


export default app;