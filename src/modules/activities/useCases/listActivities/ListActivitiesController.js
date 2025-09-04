class ListActivitiesController {
  constructor(listActivitiesUseCase) {
    this.listActivitiesUseCase = listActivitiesUseCase;
  }

  async handle(request, reply) {
    try {
      const activities = await this.listActivitiesUseCase.execute();
      return reply.code(200).send(activities);
    } catch (error) {
      return reply.code(400).send({
        message: error.message || "Unexpected error.",
      });
    }
  }
}

module.exports = { ListActivitiesController };
