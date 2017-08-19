exports.up = function (knex, Promise) {
  return knex.schema.createTable('members', (table) => {
    table.increments('id')
    table.string('name')
    table.string('phone')
    table.string('address')
    table.string('email')
    table.timestamp('created_on').defaultTo(knex.fn.now())
    table.string('role').defaultTo('m')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('members')
}
