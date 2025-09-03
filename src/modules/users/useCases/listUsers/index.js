const { PostgresUsersRepository } = require('../../repositories/implementations/PostgresUsersRepository');
const { ListUsersUseCase } = require('./ListUsersUseCase');
const { ListUsersController } = require('./ListUsersController');

const postgresUsersRepository = new PostgresUsersRepository();
const listUsersUseCase = new ListUsersUseCase(postgresUsersRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

module.exports = { listUsersController };
