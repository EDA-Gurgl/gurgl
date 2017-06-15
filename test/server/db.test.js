var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../../server/db/clothing')

test('getClothing returns all the kit', t => {
  return db.getClothing(t.context.connection, 203)
    .then((result) => {
      t.is(result[0].id, 100)
      t.is(result.length, 5)
    })
})

test('getSingleItem returns the onesie we want', t => {
  return db.getSingleItem(t.context.connection, 123, 203)
    .then((result) => {
      t.is(result.length, 1)
      t.is(result[0].id, 123)
      t.is(result[0].size_id, 35)
      t.is(result[0].photo1, '/images/dress_2.jpg')
    })
})
