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
  return db.getByName('bev', t.context.connection)
    .then((result) => {
      t.is(result[0].id, 51)
      t.is(result.length, 1)
    })
})

test('create succesfully creates new user', t => {
  let user = {
    name: 'Test user',
    username: 'testy test test',
    password: 'testing',
    address: '10 Test Street',
    phone: '0215887843',
    email: 'test@testing.com'
  }
  return db.create(user, t.context.connection)
    .then((result) => {
      return db.getByName('testy test test', t.context.connection)
    })
    .then((result) => {
      t.is(result[0].name, 'Test user')
      t.is(result[0].address, '10 Test Street')
    })
})

test('create succesfully fails if user exists', t => {
  let user = {
    name: 'Test user',
    username: 'existinguser',
    password: 'testing',
    address: '10 Test Street',
    phone: '0215887843',
    email: 'test@testing.com'
  }
  return db.create(user, t.context.connection)
    .catch(err => {
      t.is(err.errno, 19)
    })
})

test("exists returns false if user doesn't exist", t => {
  return db.exists('im not exist', t.context.connection)
    .then((result) => {
      t.is(result, false)
    })
})

test('exists returns true if user does exist', t => {
  return db.exists('bev', t.context.connection)
    .then((result) => {
      t.is(result, true)
    })
})
