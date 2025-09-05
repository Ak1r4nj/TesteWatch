class UpdateActivityUseCase {
  constructor(activitiesRepository) {
    this.activitiesRepository = activitiesRepository;
  }

  async execute(id, { name, category, progress, user_ids }) {

    const activity = await this.activitiesRepository.findById(id);
    if (!activity) {
      throw new Error("Activity not found");
    }

    await this.activitiesRepository.update(id, { name, category, progress, user_ids });

    return { ...activity, name, category, progress, user_ids };
  }
}

module.exports = { UpdateActivityUseCase };
