class UpdateActivityController {
  constructor(updateActivityUseCase) {
    this.updateActivityUseCase = updateActivityUseCase;
  }

  async handle(request, reply) {
    const { id } = request.params;
    const { name, category, progress, userIds } = request.body;

    try {
      const updated = await this.updateActivityUseCase.execute(id, {
        name,
        category,
        progress,
        userIds,
      });
      return reply.code(200).send(updated);
    } catch (error) {
      return reply.code(400).send({ message: error.message });
    }
  }
}

module.exports = { UpdateActivityController };
