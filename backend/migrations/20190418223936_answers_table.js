exports.up = function(knex, Promise) {
  return knex.schema.createTable('answers', function(tbl) {
    tbl.increments();
    tbl.string('name', 255)
    tbl.string('answer', 255)
    tbl.foreign('producer').references('producers.id')
    tbl.foreign('question').references('questions.id')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('answers');
};