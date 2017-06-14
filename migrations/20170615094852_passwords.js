exports.up = knex => knex.schema.alterTable('members', table => {
  table.string('username').unique()
  table.binary('hash')
})

exports.down = function(knex, Promise) {
  return knex.schema.table('members', table => {
    table.dropColumn('username')
    table.dropColumn('hash')
  })
}
