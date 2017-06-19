var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../../server/db/members')

test('getById returns correct user', t => {
  return db.getById(51, t.context.connection)
    .then((result) => {
      t.is(result[0].id, 51)
      t.is(result.length, 1)
    })
})

test('getByName returns correct user', t => {
  return db.getById(51, t.context.connection)
    .then((result) => {
      t.is(result[0].id, 51)
      t.is(result.length, 1)
    })
})
