const { PostgresActivitiesRepository } = require("../../repositories/implementations/PostgresActivitiesRepository");
const { DeleteActivityUseCase } = require("./DeleteActivityUseCase");
const { DeleteActivityController } = require("./DeleteActivityController");

const postgresActivitiesRepository = new PostgresActivitiesRepository();
const deleteActivityUseCase = new DeleteActivityUseCase(postgresActivitiesRepository);
const deleteActivityController = new DeleteActivityController(deleteActivityUseCase);

module.exports = { deleteActivityController };
