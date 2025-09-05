const { createUserController } = require("../../../modules/users/useCases/createUser");
const { listUsersController } = require("../../../modules/users/useCases/listUsers");
const { updateUserController } = require("../../../modules/users/useCases/updateUser");
const { deleteUserController } = require("../../../modules/users/useCases/deleteUser");
const { loginUserController } = require("../../../modules/users/useCases/loginUser");

async function usersRoutes(fastify) {
  fastify.post("/users", {
    schema: {
      description: "Cria um novo usuário",
      tags: ["Users"],
      body: {
        type: "object",
        required: ["name", "email", "password"],
        properties: {
          name: { type: "string" },
          email: { type: "string", format: "email" },
          password: { type: "string" },
        },
      },
      response: {
        201: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            name: { type: "string" },
            email: { type: "string" },
            created_at: { type: "string", format: "date-time" },
          },
        },
      },
    },
    handler: (req, reply) => createUserController.handle(req, reply),
  });

  fastify.get("/users", {
    schema: {
      description: "Lista todos os usuários",
      tags: ["Users"],
      response: {
        200: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              email: { type: "string" },
              created_at: { type: "string", format: "date-time" },
            },
          },
        },
      },
    },
    handler: (req, reply) => listUsersController.handle(req, reply),
  });

  fastify.put("/users/:id", {
    schema: {
      description: "Atualiza um usuário",
      tags: ["Users"],
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
          email: { type: "string" },
          password: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
            created_at: { type: "string", format: "date-time" },
          },
        },
      },
    },
    handler: (req, reply) => updateUserController.handle(req, reply),
  });

  fastify.delete("/users/:id", {
    schema: {
      description: "Deleta um usuário",
      tags: ["Users"],
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
    handler: (req, reply) => deleteUserController.handle(req, reply),
  });

  fastify.post("/login", {
    schema: {
      description: "Realiza login de um usuário",
      tags: ["Auth"],
      body: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: { type: "string", format: "email" },
          password: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
            token: { type: "string" },
          },
        },
      },
    },
    handler: (req, reply) => loginUserController.handle(req, reply),
  });
}

module.exports = { usersRoutes };
