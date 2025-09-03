const { PostgresUsersRepository } = require("../../repositories/implementations/PostgresUsersRepository");
const { LoginUserUseCase } = require("./LoginUserUseCase");
const { LoginUserController } = require("./LoginUserController");

const postgresUsersRepository = new PostgresUsersRepository();
const loginUserUseCase = new LoginUserUseCase(postgresUsersRepository);
const loginUserController = new LoginUserController(loginUserUseCase);

module.exports = { loginUserController };
