const { v4: uuidV4 } = require('uuid');

class User {
  constructor({ name, email, password, id, createdAt }) {
    this.name = name;
    this.email = email;
    this.password = password;

    this.id = id ?? uuidV4(); 

    this.createdAt = createdAt ?? new Date();
  }
}

module.exports = { User };