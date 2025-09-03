class DeleteUserUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(id) {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new Error('User not found.');
    }
    await this.usersRepository.delete(id);
    return { message: 'User deleted successfully' };
  }
}

module.exports = { DeleteUserUseCase };
