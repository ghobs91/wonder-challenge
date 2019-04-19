exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', function(tbl) {
    tbl.increments();
    tbl.string('name', 255)
    tbl.string('question', 255)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('questions');
};