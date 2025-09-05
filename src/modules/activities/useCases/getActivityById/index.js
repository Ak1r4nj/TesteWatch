const { PostgresActivitiesRepository } = require("../../repositories/implementations/PostgresActivitiesRepository");
const { GetActivityByIdUseCase } = require("./GetActivityByIdUseCase");
const { GetActivityByIdController } = require("./GetActivityByIdController");

const postgresActivitiesRepository = new PostgresActivitiesRepository();
const getActivityByIdUseCase = new GetActivityByIdUseCase(postgresActivitiesRepository);
const getActivityByIdController = new GetActivityByIdController(getActivityByIdUseCase);

module.exports = { getActivityByIdController };
