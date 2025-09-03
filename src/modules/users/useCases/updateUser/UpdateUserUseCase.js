const bcrypt = require('bcryptjs');

class UpdateUserUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(id, { name, email, password }) {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new Error('User not found.');
    }

    let hashedPassword = user.password;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 8);
    }

    return this.usersRepository.update(id, {
      name: name ?? user.name,
      email: email ?? user.email,
      password: hashedPassword,
    });
  }
}

module.exports = { UpdateUserUseCase };