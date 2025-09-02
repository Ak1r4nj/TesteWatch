// backend/src/server.js

require('dotenv').config();

const fastify = require('fastify')({
  logger: true,
});

const db = require('./database');

fastify.get('/health-check', async (request, reply) => {
  try {
    const result = await db.query('SELECT NOW()');
    reply.code(200).send({
      status: 'API is running',
      dbConnection: 'Established',
      dbTime: result.rows[0].now,
    });
  } catch (error) {
    fastify.log.error(error);
    reply.code(500).send({
      status: 'API is running',
      dbConnection: 'Failed',
      error: error.message,
    });
  }
});

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    await fastify.listen({ port: port, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();