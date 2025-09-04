const { PostgresActivitiesRepository } = require("../../repositories/implementations/PostgresActivitiesRepository");
const { UpdateActivityUseCase } = require("./UpdateActivityUseCase");
const { UpdateActivityController } = require("./UpdateActivityController");

const postgresActivitiesRepository = new PostgresActivitiesRepository();
const updateActivityUseCase = new UpdateActivityUseCase(postgresActivitiesRepository);
const updateActivityController = new UpdateActivityController(updateActivityUseCase);

module.exports = { updateActivityController };
