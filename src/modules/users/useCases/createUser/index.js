const { PostgresUsersRepository } = require('../../repositories/implementations/PostgresUsersRepository');
const { CreateUserUsecase } = require('./CreateUserUsecase');
const { CreateUserController } = require('./CreateUserController');

const postgresUsersRepository = new PostgresUsersRepository();

const createUserUsecase = new CreateUserUsecase(
  postgresUsersRepository 
);

const createUserController = new CreateUserController(
  createUserUsecase 
);


module.exports = { createUserController };