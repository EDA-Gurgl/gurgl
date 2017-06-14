exports.up = function (knex, Promise) {
  return knex.schema.createTable('loans', (table) => {
    table.increments('id')
    table.integer('member_id')
    table.integer('clothing_id')
    table.date('loaned_on').defaultTo(knex.fn.now())
    table.date('due_back_on')
    table.date('returned_on')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('loans')
}
