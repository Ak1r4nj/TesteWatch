const { Activity } = require("../../models/Activity");

class CreateActivityUseCase {
  constructor(activitiesRepository) {
    this.activitiesRepository = activitiesRepository;
  }

  async execute({ name, category, progress, user_ids }) {
    const activity = new Activity({ name, category, progress, user_ids });
    await this.activitiesRepository.create(activity);
    return activity;
  }
}

module.exports = { CreateActivityUseCase };
