import { describe, test, expect } from "@jest/globals";
import jwt from "jsonwebtoken";
import request from "supertest";
import express from "express";
import cookieParser from "cookie-parser";

// Test auth middleware in isolation (no DB needed)
const SECRET = "test-secret-key";

// Inline middleware replica for unit testing (avoids importing ENV)
const testAuthMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "No token" });
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Create a mini test app
const createTestApp = () => {
  const app = express();
  app.use(cookieParser());
  app.get("/protected", testAuthMiddleware, (req, res) => {
    res.json({ userId: req.user.id });
  });
  return app;
};

describe("Auth Middleware", () => {
  const app = createTestApp();

  test("should reject requests with no token", async () => {
    const res = await request(app).get("/protected");
    expect(res.status).toBe(401);
    expect(res.body.message).toBe("No token");
  });

  test("should reject requests with invalid token", async () => {
    const res = await request(app)
      .get("/protected")
      .set("Cookie", "token=invalidtoken123");

    expect(res.status).toBe(401);
    expect(res.body.message).toBe("Invalid token");
  });

  test("should accept requests with valid token", async () => {
    const token = jwt.sign({ id: "user123" }, SECRET, { expiresIn: "1h" });
    const res = await request(app)
      .get("/protected")
      .set("Cookie", `token=${token}`);

    expect(res.status).toBe(200);
    expect(res.body.userId).toBe("user123");
  });

  test("should reject expired tokens", async () => {
    const token = jwt.sign({ id: "user123" }, SECRET, { expiresIn: "0s" });
    // Wait a moment for the token to expire
    await new Promise((r) => setTimeout(r, 1100));
    const res = await request(app)
      .get("/protected")
      .set("Cookie", `token=${token}`);

    expect(res.status).toBe(401);
  });

  test("should reject token signed with wrong secret", async () => {
    const token = jwt.sign({ id: "user123" }, "wrong-secret", { expiresIn: "1h" });
    const res = await request(app)
      .get("/protected")
      .set("Cookie", `token=${token}`);

    expect(res.status).toBe(401);
  });
});
