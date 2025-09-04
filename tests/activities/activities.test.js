const request = require("supertest");
const fastify = require("../../src/shared/http/server");

describe("Activities CRUD", () => {
  let activityId;

  beforeAll(async () => {
    await fastify.ready(); 
  });

  afterAll(async () => {
    await fastify.close(); 
  });

  it("should create a new activity", async () => {
    const res = await request(fastify.server)
      .post("/activities")
      .send({
        name: "Treino de Node",
        category: "Estudos",
        progress: 10,
        userIds: [],
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    activityId = res.body.id;
  });

  it("should list all activities", async () => {
    const res = await request(fastify.server).get("/activities");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should update an activity", async () => {
    const res = await request(fastify.server)
      .put(`/activities/${activityId}`)
      .send({
        name: "Treino de Fastify",
        category: "Backend",
        progress: 50,
        userIds: [],
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Treino de Fastify");
  });

  it("should delete an activity", async () => {
    const res = await request(fastify.server).delete(`/activities/${activityId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Activity deleted successfully");
  });
});
