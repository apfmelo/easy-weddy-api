import request from "supertest";

import app from "../../app";

describe("User routes", () => {
  test("Get all users", async () => {
    const res = await request(app).get("/health");
    expect(res.body).toEqual(["Goon", "Tsuki", "Joe"]);
  });
});