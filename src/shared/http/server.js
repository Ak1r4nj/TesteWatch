require('dotenv').config();

const fastify = require('fastify')({
  logger: true,
});

const db = require('../database/database');
const { usersRoutes } = require('./routes/users.routes.js');
const { activitiesRoutes } = require("./routes/activities.routes");

async function buildServer() {
  await fastify.register(require("@fastify/swagger"), {
    openapi: {
      info: {
        title: "TesteWatch API",
        description: "Documentação da API do TesteWatch com Swagger",
        version: "1.0.0",
      },
      servers: [{ url: "http://localhost:3000" }],
    },
  });

  await fastify.register(require("@fastify/swagger-ui"), {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "list",
      deepLinking: false,
    },
  });

  fastify.register(usersRoutes);
  fastify.register(activitiesRoutes);

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

  return fastify;
}
const start = async () => {
  try {
    const server = await buildServer();
    
    const port = process.env.PORT || 3000;
    await server.listen({ port, host: '0.0.0.0' });
    
    server.log.info(`Server running at http://localhost:${port}`);
    server.log.info(`Docs available at http://localhost:${port}/docs`);

  } catch (err) {
    console.error("Erro fatal ao iniciar servidor:", err);
    process.exit(1);
  }
};
if (require.main === module) {
  start();
}

module.exports = { buildServer };