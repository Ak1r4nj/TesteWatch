const db = require("../../../../shared/database/database");

class PostgresActivitiesRepository {
  async findAll() {
    const result = await db.query("SELECT * FROM activities");
    return result.rows;
  }

  async findById(id) {
    const result = await db.query("SELECT * FROM activities WHERE id = $1", [id]);
    return result.rows[0] || null;
  }

  async create({ id, name, category, progress, userIds, createdAt }) {
    await db.query(
      `INSERT INTO activities (id, name, category, progress, user_ids, created_at)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [id, name, category, progress, JSON.stringify(userIds), createdAt]
    );
  }

  async update(id, { name, category, progress, userIds }) {
    await db.query(
      `UPDATE activities 
       SET name = $1, category = $2, progress = $3, user_ids = $4 
       WHERE id = $5`,
      [name, category, progress, JSON.stringify(userIds), id]
    );
  }

  async delete(id) {
    await db.query("DELETE FROM activities WHERE id = $1", [id]);
  }
}

module.exports = { PostgresActivitiesRepository };
