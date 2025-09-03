class ListUsersUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute() {
    return this.usersRepository.findAll();
  }
}

module.exports = { ListUsersUseCase };
