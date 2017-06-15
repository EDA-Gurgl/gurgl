exports.up = function (knex, Promise) {
  return knex.schema.createTable('clothing', (table) => {
    table.increments('id')
    table.integer('size_id')
    table.integer('brand_id')
    table.integer('style_id')
    table.integer('condition_id')
    table.integer('status_id')
    table.string('photo1')
    table.string('photo2')
    table.string('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('clothing')
}
