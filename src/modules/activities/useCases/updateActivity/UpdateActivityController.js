class UpdateActivityController {
  constructor(updateActivityUseCase) {
    this.updateActivityUseCase = updateActivityUseCase;
  }

  async handle(req, reply) {
    console.log('[CONTROLLER] Dados recebidos para executar:', req.body);
    const { id } = req.params;
    const { name, category, progress, user_ids } = req.body;

    try {
      const activity = await this.updateActivityUseCase.execute(id, {
        name,
        category,
        progress,
        user_ids,
      });

      return reply.code(200).send(activity);
    } catch (error) {
      return reply.code(400).send({
        message: error.message || "Unexpected error.",
      });
    }
  }
}

module.exports = { UpdateActivityController };
