exports.up = function (knex, Promise) {
  return knex.schema.createTable('favourites', (table) => {
    table.integer('user_id')
    table.integer('clothing_id')
    table.timestamp('favourited_on').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('favourites')
}
