class DeleteActivityController {
  constructor(deleteActivityUseCase) {
    this.deleteActivityUseCase = deleteActivityUseCase;
  }

  async handle(request, reply) {
    const { id } = request.params;

    try {
      const result = await this.deleteActivityUseCase.execute(id);
      return reply.code(200).send(result);
    } catch (error) {
      return reply.code(400).send({ message: error.message });
    }
  }
}

module.exports = { DeleteActivityController };
