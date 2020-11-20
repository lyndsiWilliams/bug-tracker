module.exports = {

  development: {
    client: 'sqlite3',
    connection: { filename: './data/tickets.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations'
    },
  },

};
