class CreateActivityController {
  constructor(createActivityUseCase) {
    this.createActivityUseCase = createActivityUseCase;
  }

  async handle(request, reply) {
    const { name, category, progress, user_ids } = request.body;

    try {
      const activity = await this.createActivityUseCase.execute({
        name,
        category,
        progress,
        user_ids: Array.isArray(user_ids) ? user_ids : (user_ids || []),
      });
      return reply.code(201).send(activity);
    } catch (error) {
      return reply.code(400).send({ message: error.message });
    }
  }
}

module.exports = { CreateActivityController };
