import { describe, test, expect } from "@jest/globals";
import request from "supertest";
import app from "../src/app.js";

describe("Health Endpoint — /api/health", () => {
  test("GET /api/health — should return health status", async () => {
    const res = await request(app).get("/api/health");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("mongo");
    expect(res.body).toHaveProperty("ok");
    // ok will be false if DB not connected, but endpoint should still respond
    expect(typeof res.body.ok).toBe("boolean");
  });
});
