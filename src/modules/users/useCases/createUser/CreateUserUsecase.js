const bcrypt = require('bcryptjs');
const { User } = require('../../models/User');

class CreateUserUsecase {
    constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ name, email, password }) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User with this email already exists.');
    }

    const hashedPassword = await bcrypt.hash(password, 8); 

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await this.usersRepository.create(user);

    const userWithoutPassword = { ...user };
    delete userWithoutPassword.password;
    
    return userWithoutPassword;
  }
}

module.exports = { CreateUserUsecase };