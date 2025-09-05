const { createActivityController } = require("../../../modules/activities/useCases/createActivity");
const { listActivitiesController } = require("../../../modules/activities/useCases/listActivities");
const { updateActivityController } = require("../../../modules/activities/useCases/updateActivity");
const { deleteActivityController } = require("../../../modules/activities/useCases/deleteActivity");
const { getActivityByIdController } = require("../../../modules/activities/useCases/getActivityById");

async function activitiesRoutes(fastify) {
  fastify.post("/activities", {
    schema: {
      description: "Cria uma nova atividade",
      tags: ["Activities"],
      body: {
        type: "object",
        required: ["name", "category"],
        properties: {
          name: { type: "string" },
          category: { type: "string" },
          progress: { type: "integer", minimum: 0, maximum: 100 },
          user_ids: { type: "array", items: { type: "string", format: "uuid" } },
        },
      },
      response: {
        201: {
          description: "Atividade criada",
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            name: { type: "string" },
            category: { type: "string" },
            progress: { type: "integer" },
            user_ids: { type: "array", items: { type: "string" } },
            created_at: { type: "string", format: "date-time" },
          },
        },
      },
    },
    handler: (req, reply) => createActivityController.handle(req, reply),
  });

  fastify.get("/activities", {
    schema: {
      description: "Lista todas as atividades",
      tags: ["Activities"],
      response: {
        200: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              category: { type: "string" },
              progress: { type: "integer" },
              user_ids: { type: "array", items: { type: "string" } },
              created_at: { type: "string", format: "date-time" },
            },
          },
        },
      },
    },
    handler: (req, reply) => listActivitiesController.handle(req, reply),
  });

  fastify.get("/activities/:id", {
    schema: {
      description: "Busca uma atividade pelo ID",
      tags: ["Activities"],
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "string", format: "uuid" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            category: { type: "string" },
            progress: { type: "integer" },
            user_ids: { type: "array", items: { type: "string" } },
            created_at: { type: "string", format: "date-time" },
          },
        },
      },
    },
    handler: (req, reply) => getActivityByIdController.handle(req, reply),
  });

  fastify.put("/activities/:id", {
    schema: {
      description: "Atualiza uma atividade",
      tags: ["Activities"],
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "string", format: "uuid" },
        },
      },
      body: {
        type: "object",
        properties: {
          name: { type: "string" },
          category: { type: "string" },
          progress: { type: "integer", minimum: 0, maximum: 100 },
          user_ids: { type: "array", items: { type: "string" } },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            category: { type: "string" },
            progress: { type: "integer" },
            user_ids: { type: "array", items: { type: "string" } },
            created_at: { type: "string", format: "date-time" },
          },
        },
      },
    },
    handler: (req, reply) => updateActivityController.handle(req, reply),
  });

  fastify.delete("/activities/:id", {
    schema: {
      description: "Deleta uma atividade",
      tags: ["Activities"],
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "string", format: "uuid" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            message: { type: "string" },
          },
        },
      },
    },
    handler: (req, reply) => deleteActivityController.handle(req, reply),
  });
}

module.exports = { activitiesRoutes };
