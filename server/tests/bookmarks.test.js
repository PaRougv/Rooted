import { describe, test, expect, beforeAll, afterAll } from "@jest/globals";
import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";
import { User } from "../src/models/user.model.js";
import Bookmark from "../src/models/bookmark.model.js";

const MONGO_URI = process.env.MONGODB_URI_TEST || process.env.MONGODB_URI;
const canConnect = !!MONGO_URI;

const describeWithDB = canConnect ? describe : describe.skip;

describeWithDB("Bookmarks API — /api/bookmarks", () => {
  let authCookie;
  let bookmarkId;
  const testEmail = `bookmark_${Date.now()}@rooted.test`;

  beforeAll(async () => {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGO_URI);
    }

    await request(app)
      .post("/api/auth/register")
      .send({ name: "Bookmark Tester", email: testEmail, password: "Test@12345" });

    const loginRes = await request(app)
      .post("/api/auth/login")
      .send({ email: testEmail, password: "Test@12345" });

    authCookie = loginRes.headers["set-cookie"];
  });

  afterAll(async () => {
    const user = await User.findOne({ email: testEmail });
    if (user) {
      await Bookmark.deleteMany({ userId: user._id });
    }
    await User.deleteOne({ email: testEmail });
    await mongoose.disconnect();
  });

  test("POST — should add a bookmark", async () => {
    const res = await request(app)
      .post("/api/bookmarks")
      .set("Cookie", authCookie)
      .send({ plantName: "Tulsi", notes: "Good for colds" });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty("plantName", "Tulsi");
    bookmarkId = res.body.data._id;
  });

  test("POST — should reject duplicate bookmark", async () => {
    const res = await request(app)
      .post("/api/bookmarks")
      .set("Cookie", authCookie)
      .send({ plantName: "Tulsi" });

    expect(res.status).toBe(409);
  });

  test("POST — should reject empty plant name", async () => {
    const res = await request(app)
      .post("/api/bookmarks")
      .set("Cookie", authCookie)
      .send({ plantName: "" });

    expect(res.status).toBe(400);
  });

  test("GET — should return all bookmarks", async () => {
    const res = await request(app)
      .get("/api/bookmarks")
      .set("Cookie", authCookie);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThanOrEqual(1);
  });

  test("DELETE — should remove a bookmark", async () => {
    const res = await request(app)
      .delete(`/api/bookmarks/${bookmarkId}`)
      .set("Cookie", authCookie);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test("DELETE — should return 404 for non-existent bookmark", async () => {
    const fakeId = new mongoose.Types.ObjectId().toString();
    const res = await request(app)
      .delete(`/api/bookmarks/${fakeId}`)
      .set("Cookie", authCookie);

    expect(res.status).toBe(404);
  });

  test("GET — should reject unauthenticated request", async () => {
    const res = await request(app).get("/api/bookmarks");
    expect(res.status).toBe(401);
  });
});
