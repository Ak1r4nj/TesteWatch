class CreateUserController {
  constructor(createUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(request, reply) {
    const { name, email, password } = request.body;

    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });

      return reply.code(201).send(user);

    } catch (error) {
      return reply.code(400).send({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

module.exports = { CreateUserController };