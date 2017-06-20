var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../../server/db/clothing')
var faves = require('../../server/db/favourites')

test('getClothing returns all the kit', t => {
  return db.getClothing(t.context.connection)
    .then((result) => {
      t.is(result[0].id, 119)
      t.not(result.length, 0)
    })
})

test('getFavouritesByUser returns all the favourites', t => {
  return faves.getFavouritesByUser(t.context.connection, 51)
    .then((result) => {
      t.is(result[0].id, 119)
      t.is(result[0].title, 'If you can read this!')
      t.not(result.length, 0)
      t.not(result.length, 1)
    })
})

test('getSingleItem returns the onesie we want', t => {
  return db.getSingleItem(t.context.connection, 121)
    .then((result) => {
      t.is(result.id, 121)
      t.is(result.size_description, '6-9 months')
      t.is(result.photo1, '/images/babyg_3.jpg')
    })
})
