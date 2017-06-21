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
      t.is(result[0].id, 125)
      t.not(result.length, 0)
      t.not(result.length, 1)
    })
})

test('deleteFavourite correctly deletes favourite', t => {
  return faves.deleteFavourite(t.context.connection, 51, 119)
    .then((result) => {
      t.is(result, 1)
      return faves.getFavouritesByUser(t.context.connection, 51)
    })
    .then((result) => {
      t.is(result.find((f) => f.id === 119), undefined)
    })
})

test('addFavourite correctly adds favourite', t => {
  return t.context.connection('favourites')
    .where('favourites.user_id', 51)
    .then((result) => {
      var originalLength = result.length
      return faves.addFavourite(t.context.connection, 51, 300)
      .then(() => {
        return t.context.connection('favourites')
        .where('favourites.user_id', 51)
      })
      .then((result) => {
        t.is(result.length, originalLength + 1)
        t.is(result[result.length - 1].clothing_id, 300)
      })
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
