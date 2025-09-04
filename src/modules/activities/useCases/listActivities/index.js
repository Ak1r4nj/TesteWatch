const { PostgresActivitiesRepository } = require("../../repositories/implementations/PostgresActivitiesRepository");
const { ListActivitiesUseCase } = require("./ListActivitiesUseCase");
const { ListActivitiesController } = require("./ListActivitiesController");

const postgresActivitiesRepository = new PostgresActivitiesRepository();
const listActivitiesUseCase = new ListActivitiesUseCase(postgresActivitiesRepository);
const listActivitiesController = new ListActivitiesController(listActivitiesUseCase);

module.exports = { listActivitiesController };
