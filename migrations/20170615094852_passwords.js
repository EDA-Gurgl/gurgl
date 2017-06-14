exports.up = knex => knex.schema.createTable('passwords', table => {
  table.increments('id')
  table.integer('member_id')
  table.string('username').unique()
  table.binary('hash')
})

exports.down = knex => knex.schema.dropTable('passwords')
