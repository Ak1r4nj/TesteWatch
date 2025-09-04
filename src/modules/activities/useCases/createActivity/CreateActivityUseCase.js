const { Activity } = require("../../models/Activity");

class CreateActivityUseCase {
  constructor(activitiesRepository) {
    this.activitiesRepository = activitiesRepository;
  }

  async execute({ name, category, progress, userIds }) {
    const activity = new Activity({ name, category, progress, userIds });
    await this.activitiesRepository.create(activity);
    return activity;
  }
}

module.exports = { CreateActivityUseCase };
