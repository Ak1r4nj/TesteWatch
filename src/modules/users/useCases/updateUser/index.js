const { PostgresUsersRepository } = require('../../repositories/implementations/PostgresUsersRepository');
const { UpdateUserUseCase } = require('./UpdateUserUseCase');
const { UpdateUserController } = require('./UpdateUserController');

const postgresUsersRepository = new PostgresUsersRepository();
const updateUserUseCase = new UpdateUserUseCase(postgresUsersRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

module.exports = { updateUserController };
