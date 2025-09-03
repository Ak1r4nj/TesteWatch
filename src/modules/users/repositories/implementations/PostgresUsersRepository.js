const db = require('../../../../shared/database/database'); 

class PostgresUsersRepository {
  async findByEmail(email) {
    const result = await db.query(
      'SELECT * FROM users WHERE email = $1 LIMIT 1',
      [email]
    );

    return result.rows[0] || null;
  }

  async create({ id, name, email, password, createdAt }) {
    await db.query(
      `INSERT INTO users (id, name, email, password, created_at)
       VALUES ($1, $2, $3, $4, $5)`,
      [id, name, email, password, createdAt]
    );
  }

    async findAll() {
    const result = await db.query(
        'SELECT id, name, email, created_at FROM users'
    );
    return result.rows;
    }

    async findById(id) {
    const result = await db.query(
        'SELECT id, name, email, created_at FROM users WHERE id = $1 LIMIT 1',
        [id]
    );
    return result.rows[0] || null;
    }

    async update(id, { name, email, password }) {
    const result = await db.query(
        `UPDATE users 
        SET name = $2, email = $3, password = $4
        WHERE id = $1
        RETURNING id, name, email, created_at`,
        [id, name, email, password]
    );
    return result.rows[0];
    }

    async delete(id) {
        await db.query('DELETE FROM users WHERE id = $1', [id]);
    }

}

module.exports = { PostgresUsersRepository };