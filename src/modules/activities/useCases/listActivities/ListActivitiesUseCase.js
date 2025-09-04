class ListActivitiesUseCase {
  constructor(activitiesRepository) {
    this.activitiesRepository = activitiesRepository;
  }

  async execute() {
    return await this.activitiesRepository.findAll();
  }
}

module.exports = { ListActivitiesUseCase };
