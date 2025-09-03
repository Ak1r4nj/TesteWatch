const { PostgresUsersRepository } = require('../../repositories/implementations/PostgresUsersRepository');
const { DeleteUserUseCase } = require('./DeleteUserUseCase');
const { DeleteUserController } = require('./DeleteUserController');

const postgresUsersRepository = new PostgresUsersRepository();
const deleteUserUseCase = new DeleteUserUseCase(postgresUsersRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

module.exports = { deleteUserController };
