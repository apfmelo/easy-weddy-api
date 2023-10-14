import request from "supertest";

import app from "../../app";

describe("Health route", () => {
  test("Health check", async () => {
    const res = await request(app).get("/health");
    expect(res.body).toEqual({
      message: "I'm alive!",
      service: 'Easy Weddy API',
      version: '1.0.0'
    });
  });
});