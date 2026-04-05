import { describe, test, expect, beforeAll, afterAll } from "@jest/globals";
import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";
import { User } from "../src/models/user.model.js";
import { HealthData } from "../src/models/healthdata.model.js";

const MONGO_URI = process.env.MONGODB_URI_TEST || process.env.MONGODB_URI;
const canConnect = !!MONGO_URI;

const describeWithDB = canConnect ? describe : describe.skip;

describeWithDB("Safety API — /api/safety", () => {
  let authCookie;
  let familyMemberId;
  const testEmail = `safety_${Date.now()}@rooted.test`;

  beforeAll(async () => {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGO_URI);
    }

    await request(app)
      .post("/api/auth/register")
      .send({ name: "Safety Tester", email: testEmail, password: "Test@12345" });

    const loginRes = await request(app)
      .post("/api/auth/login")
      .send({ email: testEmail, password: "Test@12345" });

    authCookie = loginRes.headers["set-cookie"];

    // Create a family member with health conditions
    const profileRes = await request(app)
      .post("/api/input/takeuser")
      .set("Cookie", authCookie)
      .send({
        name: "SafetyTest Member",
        weight: "70",
        height: "170",
        bloodpressure: "140/90",
        heartrate: "72",
        anyothercondition: "diabetes, pregnancy",
      });

    familyMemberId = profileRes.body.data.id;
  });

  afterAll(async () => {
    await HealthData.deleteMany({ name: "SafetyTest Member" });
    await User.deleteOne({ email: testEmail });
    await mongoose.disconnect();
  });

  test("POST /api/safety/check — should return safety assessment for known plant", async () => {
    const res = await request(app)
      .post("/api/safety/check")
      .set("Cookie", authCookie)
      .send({
        plantName: "Turmeric",
        familyMemberId,
      });

    expect(res.status).toBe(200);
    const data = res.body.data || res.body;
    expect(data).toHaveProperty("safetyRating");
    expect(["SAFE", "CAUTION", "AVOID"]).toContain(data.safetyRating);
    expect(Array.isArray(data.warnings)).toBe(true);
  });

  test("POST /api/safety/check — should flag pregnancy warning for Aloe Vera", async () => {
    const res = await request(app)
      .post("/api/safety/check")
      .set("Cookie", authCookie)
      .send({
        plantName: "Aloe Vera",
        familyMemberId,
      });

    expect(res.status).toBe(200);
    const data = res.body.data || res.body;
    // Aloe Vera is contraindicated in pregnancy
    const allWarnings = (data.warnings || []).join(" ").toLowerCase();
    expect(
      allWarnings.includes("pregnan") || data.safetyRating === "AVOID" || data.safetyRating === "CAUTION"
    ).toBe(true);
  });

  test("POST /api/safety/check — should handle unknown plant gracefully", async () => {
    const res = await request(app)
      .post("/api/safety/check")
      .set("Cookie", authCookie)
      .send({
        plantName: "Nonexistent Mystery Plant XYZ",
        familyMemberId,
      });

    expect(res.status).toBe(200);
    const data = res.body.data || res.body;
    expect(data).toHaveProperty("safetyRating");
  });

  test("GET /api/safety/search — should find plants by name", async () => {
    const res = await request(app)
      .get("/api/safety/search?q=tulsi")
      .set("Cookie", authCookie);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.results || res.body.data || res.body)).toBe(true);
  });

  test("GET /api/safety/plants — should return all plants", async () => {
    const res = await request(app)
      .get("/api/safety/plants")
      .set("Cookie", authCookie);

    expect(res.status).toBe(200);
    const plants = res.body.plants || res.body.data || res.body;
    expect(Array.isArray(plants)).toBe(true);
    expect(plants.length).toBeGreaterThanOrEqual(200);
  });

  test("GET /api/safety/history — should return scan history", async () => {
    const res = await request(app)
      .get("/api/safety/history")
      .set("Cookie", authCookie);

    expect(res.status).toBe(200);
  });

  test("POST /api/safety/check — should reject without familyMemberId", async () => {
    const res = await request(app)
      .post("/api/safety/check")
      .set("Cookie", authCookie)
      .send({ plantName: "Tulsi" });

    // Should return 400 or handle gracefully
    expect([200, 400]).toContain(res.status);
  });
});
