var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../../server/db/clothing')

test('getClothing returns all the kit', t => {
  return db.getClothing(t.context.connection)
    .then((result) => {
      t.is(result[0].id, 100)
      t.not(result.length, 0)
    })
})

test('getSingleItem returns the onesie we want', t => {
  return db.getSingleItem(t.context.connection, 121)
    .then((result) => {
      // t.is(result.length, 1)
      t.is(result.id, 121)
      t.is(result.size_description, '6-9 months')
      t.is(result.photo1, '/images/babyg_3.jpg')
    })
})
