class GetActivityByIdController {
  constructor(getActivityByIdUseCase) {
    this.getActivityByIdUseCase = getActivityByIdUseCase;
  }

  async handle(request, reply) {
    try {
      const { id } = request.params;
      const activity = await this.getActivityByIdUseCase.execute(id);
      return reply.code(200).send(activity);
    } catch (err) {
      return reply.code(404).send({ message: err.message });
    }
  }
}

module.exports = { GetActivityByIdController };
