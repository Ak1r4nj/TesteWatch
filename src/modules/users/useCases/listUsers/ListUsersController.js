class ListUsersController {
  constructor(listUsersUseCase) {
    this.listUsersUseCase = listUsersUseCase;
  }

  async handle(request, reply) {
    try {
      const users = await this.listUsersUseCase.execute();
      return reply.code(200).send(users);
    } catch (error) {
      return reply.code(500).send({ message: error.message });
    }
  }
}

module.exports = { ListUsersController };
