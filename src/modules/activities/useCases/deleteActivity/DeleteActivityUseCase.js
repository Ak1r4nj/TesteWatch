class DeleteActivityUseCase {
  constructor(activitiesRepository) {
    this.activitiesRepository = activitiesRepository;
  }

  async execute(id) {
    const activity = await this.activitiesRepository.findById(id);
    if (!activity) {
      throw new Error("Activity not found");
    }

    await this.activitiesRepository.delete(id);
    return { message: "Activity deleted successfully" };
  }
}

module.exports = { DeleteActivityUseCase };
