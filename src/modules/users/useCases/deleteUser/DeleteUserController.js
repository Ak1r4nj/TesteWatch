class DeleteUserController {
  constructor(deleteUserUseCase) {
    this.deleteUserUseCase = deleteUserUseCase;
  }

  async handle(request, reply) {
    const { id } = request.params;

    try {
      const result = await this.deleteUserUseCase.execute(id);
      return reply.code(200).send(result);
    } catch (error) {
      return reply.code(400).send({ message: error.message });
    }
  }
}

module.exports = { DeleteUserController };
