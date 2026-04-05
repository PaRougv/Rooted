import { ENV } from "../config/env.js";
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

const rateLimitBuckets = new Map();

const getClientKey = (req) => {
  const forwardedFor = req.headers["x-forwarded-for"];
  const ip = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : typeof forwardedFor === "string"
      ? forwardedFor.split(",")[0].trim()
      : req.ip;

  return `${req.path}:${ip || "unknown"}`;
};

const createRateLimiter = ({ windowMs, maxRequests, message }) => {
  return (req, res, next) => {
    const key = getClientKey(req);
    const now = Date.now();
    const entry = rateLimitBuckets.get(key);

    if (!entry || entry.resetAt <= now) {
      rateLimitBuckets.set(key, { count: 1, resetAt: now + windowMs });
      return next();
    }

    if (entry.count >= maxRequests) {
      return res.status(429).json({
        message,
        retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000),
      });
    }

    entry.count += 1;
    rateLimitBuckets.set(key, entry);
    return next();
  };
};

export const authRateLimit = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 10,
  message: "Too many authentication attempts. Please try again later.",
});

export const passwordResetRateLimit = createRateLimiter({
  windowMs: 60 * 60 * 1000,
  maxRequests: 5,
  message: "Too many password reset attempts. Please try again later.",
});
