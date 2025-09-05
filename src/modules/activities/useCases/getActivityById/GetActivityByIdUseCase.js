class GetActivityByIdUseCase {
  constructor(activitiesRepository) {
    this.activitiesRepository = activitiesRepository;
  }

  async execute(id) {
    const activity = await this.activitiesRepository.findById(id);
    if (!activity) {
      throw new Error("Activity not found");
    }
    return activity;
  }
}

module.exports = { GetActivityByIdUseCase };
