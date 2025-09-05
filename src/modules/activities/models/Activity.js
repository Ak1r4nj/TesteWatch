const { v4: uuidV4 } = require("uuid");

class Activity {
  constructor({ id, name, category, progress, user_ids, createdAt }) {
    this.id = id ?? uuidV4();
    this.name = name;
    this.category = category;
    this.progress = progress ?? 0;
    this.user_ids = user_ids ?? []; 
    this.createdAt = createdAt ?? new Date();
  }
}

module.exports = { Activity };
