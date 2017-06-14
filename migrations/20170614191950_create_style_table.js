exports.up = function (knex, Promise) {
  return knex.schema.createTable('style', (table) => {
    table.increments('id')
    table.string('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('style')
}
