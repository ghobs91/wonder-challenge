exports.up = function(knex, Promise) {
  return knex.schema.createTable('producers', function(tbl) {
    tbl.increments();
    tbl.string('name', 255)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('producers');
};