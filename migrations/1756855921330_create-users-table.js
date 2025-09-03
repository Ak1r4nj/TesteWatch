exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('users', {
    id: {
      type: 'uuid',
      primaryKey: true,
      notNull: true,
    },
    name: {
      type: 'varchar(255)',
      notNull: true,
    },
    email: {
      type: 'varchar(255)',
      notNull: true,
      unique: true,
    },
    password: {
      type: 'varchar(255)',
      notNull: true,
    },
    created_at: {
      type: 'timestamp with time zone',
      notNull: true,
      default: pgm.func('current_timestamp'), 
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('users');
};