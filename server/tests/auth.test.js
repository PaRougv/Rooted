import { describe, test, expect, beforeAll, afterAll } from "@jest/globals";
import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";
import { User } from "../src/models/user.model.js";

// Use in-memory test database or skip if no DB configured
const MONGO_URI = process.env.MONGODB_URI_TEST || process.env.MONGODB_URI;
const canConnect = !!MONGO_URI;

const describeWithDB = canConnect ? describe : describe.skip;

describeWithDB("Auth API — /api/auth", () => {
  const testUser = {
    name: "Test User",
    email: `test_${Date.now()}@rooted.test`,
    password: "Test@12345",
  };

  beforeAll(async () => {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGO_URI);
    }
  });

  afterAll(async () => {
    // Clean up test user
    await User.deleteOne({ email: testUser.email });
    await mongoose.disconnect();
  });

  test("POST /api/auth/register — should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send(testUser);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("message", "User registered successfully");
    expect(res.body.user).toHaveProperty("email", testUser.email);
    expect(res.body.user).not.toHaveProperty("password"); // password should not be returned
  });

  test("POST /api/auth/register — should reject duplicate email", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send(testUser);

    expect(res.status).toBe(400);
  });

  test("POST /api/auth/register — should reject missing fields", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "noname@test.com" });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message");
  });

  test("POST /api/auth/register — should reject short password", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ name: "Short", email: "short@test.com", password: "12" });

    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(/6 characters/);
  });

  test("POST /api/auth/login — should login with correct credentials", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: testUser.email, password: testUser.password });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "Login successful");
    expect(res.body.user).toHaveProperty("email", testUser.email);
    // Should set cookie
    expect(res.headers["set-cookie"]).toBeDefined();
  });

  test("POST /api/auth/login — should reject wrong password", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: testUser.email, password: "wrongpassword" });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message", "Invalid credentials");
  });

  test("POST /api/auth/login — should reject non-existent email", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "nobody@test.com", password: "anything" });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message", "Invalid credentials");
  });

  test("POST /api/auth/login — should reject missing fields", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({});

    expect(res.status).toBe(400);
  });

  test("GET /api/auth/logout — should clear auth cookie", async () => {
    const res = await request(app).get("/api/auth/logout");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "Logged out successfully");
  });

  test("POST /api/auth/forgot-password — should not reveal if email exists", async () => {
    const res = await request(app)
      .post("/api/auth/forgot-password")
      .send({ email: "nonexistent@test.com" });

    expect(res.status).toBe(200);
    // Should NOT say "no user found" — security best practice
  });

  test("POST /api/auth/forgot-password — should reject empty email", async () => {
    const res = await request(app)
      .post("/api/auth/forgot-password")
      .send({});

    expect(res.status).toBe(400);
  });

  test("POST /api/auth/reset-password — should reject invalid token", async () => {
    const res = await request(app)
      .post("/api/auth/reset-password")
      .send({ token: "invalidtoken", newPassword: "NewPass123" });

    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(/invalid|expired/i);
  });

  test("POST /api/auth/reset-password — should reject short new password", async () => {
    const res = await request(app)
      .post("/api/auth/reset-password")
      .send({ token: "sometoken", newPassword: "ab" });

    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(/6 characters/);
  });
});
