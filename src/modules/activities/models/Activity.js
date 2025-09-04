const { v4: uuidV4 } = require("uuid");

class Activity {
  constructor({ id, name, category, progress, userIds, createdAt }) {
    this.id = id ?? uuidV4();
    this.name = name;
    this.category = category;
    this.progress = progress ?? 0;
    this.userIds = userIds ?? []; 
    this.createdAt = createdAt ?? new Date();
  }
}

module.exports = { Activity };
