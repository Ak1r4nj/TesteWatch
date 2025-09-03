class UpdateUserController {
  constructor(updateUserUseCase) {
    this.updateUserUseCase = updateUserUseCase;
  }

  async handle(request, reply) {
    const { id } = request.params;
    const { name, email, password } = request.body;

    try {
      const updatedUser = await this.updateUserUseCase.execute(id, {
        name,
        email,
        password,
      });
      return reply.code(200).send(updatedUser);
    } catch (error) {
      return reply.code(400).send({ message: error.message });
    }
  }
}

module.exports = { UpdateUserController };
