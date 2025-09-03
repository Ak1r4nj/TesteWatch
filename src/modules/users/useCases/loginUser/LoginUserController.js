class LoginUserController {
  constructor(loginUserUseCase) {
    this.loginUserUseCase = loginUserUseCase;
  }

  async handle(request, reply) {
    const { email, password } = request.body;

    try {
      const user = await this.loginUserUseCase.execute({ email, password });
      return reply.code(200).send(user);
    } catch (error) {
      return reply.code(401).send({
        message: error.message || "Invalid credentials",
      });
    }
  }
}

module.exports = { LoginUserController };
