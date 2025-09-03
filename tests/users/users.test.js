const request = require('supertest');
const fastify = require('../../src/shared/http/server');

describe('Users CRUD', () => {
  let userId;

  beforeAll(async () => {
    await fastify.ready();
  });

  afterAll(async () => {
    await fastify.close();
  });

  it('should create a new user', async () => {
    const response = await request(fastify.server)
      .post('/users')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: '123456'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.email).toBe('test@example.com');

    userId = response.body.id; 
  });

  it('should list all users', async () => {
    const response = await request(fastify.server).get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should update an existing user', async () => {
    const response = await request(fastify.server)
      .put(`/users/${userId}`)
      .send({
        name: 'Updated User',
        email: 'updated@example.com',
        password: 'newpassword'
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Updated User');
    expect(response.body.email).toBe('updated@example.com');
  });

  it('should delete a user', async () => {
    const response = await request(fastify.server).delete(`/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'User deleted successfully');
  });
});
