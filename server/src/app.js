import express from 'express';
import CookieParser from 'cookie-parser'
import authRoutes from "./routes/auth.routes.js";
import cors from "cors"

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json());
app.use(CookieParser())
app.use("/api/auth", authRoutes);

export default app;