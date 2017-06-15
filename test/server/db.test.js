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
      t.is(result.length, 1)
      t.is(result[0].id, 121)
      t.is(result[0].size_id, 34)
      t.is(result[0].photo1, '/images/babyg_3.jpg')
    })
})
