exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("activities", {
    id: {
      type: "uuid",
      primaryKey: true,
      notNull: true,
    },
    name: {
      type: "varchar(255)",
      notNull: true,
    },
    category: {
      type: "varchar(255)",
      notNull: false,
    },
    progress: {
      type: "integer",
      notNull: true,
      default: 0,
    },
    user_ids: {
      type: "jsonb",
      notNull: true,
      default: pgm.func("'[]'::jsonb"),
    },
    created_at: {
      type: "timestamp with time zone",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("activities");
};
