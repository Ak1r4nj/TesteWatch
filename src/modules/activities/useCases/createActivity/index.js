const { PostgresActivitiesRepository } = require("../../repositories/implementations/PostgresActivitiesRepository");
const { CreateActivityUseCase } = require("./CreateActivityUseCase");
const { CreateActivityController } = require("./CreateActivityController");

const postgresActivitiesRepository = new PostgresActivitiesRepository();
const createActivityUseCase = new CreateActivityUseCase(postgresActivitiesRepository);
const createActivityController = new CreateActivityController(createActivityUseCase);

module.exports = { createActivityController };
