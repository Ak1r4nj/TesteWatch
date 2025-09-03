const { createUserController } = require("../../../modules/users/useCases/createUser");
const { listUsersController } = require("../../../modules/users/useCases/listUsers");
const { updateUserController } = require("../../../modules/users/useCases/updateUser");
const { deleteUserController } = require("../../../modules/users/useCases/deleteUser");
const { loginUserController } = require("../../../modules/users/useCases/loginUser");

async function usersRoutes(fastify) {
  fastify.post("/users", (req, reply) => createUserController.handle(req, reply));
  fastify.get("/users", (req, reply) => listUsersController.handle(req, reply));
  fastify.put("/users/:id", (req, reply) => updateUserController.handle(req, reply));
  fastify.delete("/users/:id", (req, reply) => deleteUserController.handle(req, reply));
  fastify.post("/login", (req, reply) => loginUserController.handle(req, reply)); // 🚀 Login aqui
}

module.exports = { usersRoutes };
