import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import verificationRoutes from "./routes/verification.routes.js";
import userDetailRoutes from "./routes/inputllm.route.js";
import cameraRoutes from './routes/camera.router.js'
import safetyRoutes from './routes/safety.routes.js'
import chatRoutes from './routes/chat.routes.js'
import journalRoutes from './routes/journal.routes.js'
import bookmarkRoutes from './routes/bookmark.routes.js'
import cors from "cors";
import { ENV } from "./config/env.js";

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

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

app.use(cookieParser());

app.get("/api/health", (req, res) => {
  const s = mongoose.connection.readyState;
  const label = { 0: "disconnected", 1: "connected", 2: "connecting", 3: "disconnecting" }[s] ?? s;
  res.json({ mongo: label, ok: s === 1 });
});

app.use("/api/auth", authRoutes);
app.use("/api/verification", verificationRoutes);
app.use("/api/input", userDetailRoutes);
app.use('/camera' , cameraRoutes)
app.use('/api/safety', safetyRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/journal', journalRoutes)
app.use('/api/bookmarks', bookmarkRoutes)

// Ola Maps Places proxy — keeps API key server-side
app.get('/api/places/nearby', async (req, res) => {
  const { lat, lng, radius = 10000 } = req.query;
  if (!lat || !lng) return res.status(400).json({ error: "lat and lng required" });
  if (!ENV.OLA_MAPS_KEY) {
    return res.status(503).json({ error: "Ola Maps API key not configured" });
  }
  try {
    const url = `https://api.olamaps.io/places/v1/nearbysearch?location=${lat},${lng}&radius=${radius}&api_key=${ENV.OLA_MAPS_KEY}`;
    console.log("[Ola Maps] fetching:", url);
    const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
    const text = await response.text();
    console.log("[Ola Maps] raw response:", text.slice(0, 500));
    const data = JSON.parse(text);
    res.json(data);
  } catch (err) {
    console.error("[Ola Maps] error:", err.message);
    res.status(500).json({ error: "Places API request failed", detail: err.message });
  }
});

// CNN proxy — forwards image to Python FastAPI service
app.post('/api/ml/classify', async (req, res) => {
  try {
    const response = await fetch('http://localhost:8000/classify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: req.body.image }),
      signal: AbortSignal.timeout(15000)
    });
    const data = await response.json();
    res.json(data);
  } catch {
    res.json({
      success: false,
      model: "EfficientNet-B0",
      plant_predictions: [],
      note: "CNN service offline. Start it with: cd server/ml && python main.py"
    });
  }
});

export default app;
