
exports.up = function(knex) {
  return knex.schema.createTable("tickets", table => {
    table.increments();

    table
      .string("title")
      .notNullable();

    table
      .string("description")
      .notNullable();

    table
      .timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tickets");
};
