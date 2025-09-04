class CreateActivityController {
  constructor(createActivityUseCase) {
    this.createActivityUseCase = createActivityUseCase;
  }

  async handle(request, reply) {
    const { name, category, progress, userIds } = request.body;

    try {
      const activity = await this.createActivityUseCase.execute({
        name,
        category,
        progress,
        userIds,
      });
      return reply.code(201).send(activity);
    } catch (error) {
      return reply.code(400).send({ message: error.message });
    }
  }
}

module.exports = { CreateActivityController };
