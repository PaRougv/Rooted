import { describe, test, expect, beforeAll, afterAll } from "@jest/globals";
import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";
import { User } from "../src/models/user.model.js";
import { HealthData } from "../src/models/healthdata.model.js";

const MONGO_URI = process.env.MONGODB_URI_TEST || process.env.MONGODB_URI;
const canConnect = !!MONGO_URI;

const describeWithDB = canConnect ? describe : describe.skip;

describeWithDB("Health Profiles API — /api/input/takeuser", () => {
  let authCookie;
  let profileId;
  const testEmail = `profile_${Date.now()}@rooted.test`;

  beforeAll(async () => {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGO_URI);
    }

    // Register and login to get auth cookie
    await request(app)
      .post("/api/auth/register")
      .send({ name: "Profile Tester", email: testEmail, password: "Test@12345" });

    const loginRes = await request(app)
      .post("/api/auth/login")
      .send({ email: testEmail, password: "Test@12345" });

    authCookie = loginRes.headers["set-cookie"];
  });

  afterAll(async () => {
    await HealthData.deleteMany({ name: /^TestMember/ });
    await User.deleteOne({ email: testEmail });
    await mongoose.disconnect();
  });

  test("POST — should create a family profile", async () => {
    const res = await request(app)
      .post("/api/input/takeuser")
      .set("Cookie", authCookie)
      .send({
        name: "TestMember One",
        weight: "70",
        height: "175",
        bloodpressure: "120/80",
        heartrate: "72",
        anyothercondition: "diabetes",
      });

    expect(res.status).toBe(201);
    expect(res.body.data).toHaveProperty("name", "TestMember One");
    expect(res.body.data).toHaveProperty("id");
    profileId = res.body.data.id;
  });

  test("GET — should fetch all profiles", async () => {
    const res = await request(app)
      .get("/api/input/takeuser")
      .set("Cookie", authCookie);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThanOrEqual(1);
  });

  test("PUT — should update a profile", async () => {
    const res = await request(app)
      .put(`/api/input/takeuser/${profileId}`)
      .set("Cookie", authCookie)
      .send({ name: "TestMember Updated", weight: "75" });

    expect(res.status).toBe(200);
    expect(res.body.data.name).toBe("TestMember Updated");
  });

  test("POST — should reject profile without name", async () => {
    const res = await request(app)
      .post("/api/input/takeuser")
      .set("Cookie", authCookie)
      .send({ weight: "60" });

    expect(res.status).toBe(400);
  });

  test("DELETE — should delete a profile", async () => {
    const res = await request(app)
      .delete(`/api/input/takeuser/${profileId}`)
      .set("Cookie", authCookie);

    expect(res.status).toBe(200);
  });

  test("DELETE — should return 404 for non-existent profile", async () => {
    const fakeId = new mongoose.Types.ObjectId().toString();
    const res = await request(app)
      .delete(`/api/input/takeuser/${fakeId}`)
      .set("Cookie", authCookie);

    expect(res.status).toBe(404);
  });

  test("GET — should reject unauthenticated request", async () => {
    const res = await request(app).get("/api/input/takeuser");

    expect(res.status).toBe(401);
  });
});
