class UpdateActivityUseCase {
  constructor(activitiesRepository) {
    this.activitiesRepository = activitiesRepository;
  }

  async execute(id, { name, category, progress, userIds }) {
    const activity = await this.activitiesRepository.findById(id);
    if (!activity) {
      throw new Error("Activity not found");
    }

    await this.activitiesRepository.update(id, { name, category, progress, userIds });

    return { ...activity, name, category, progress, userIds };
  }
}

module.exports = { UpdateActivityUseCase };
