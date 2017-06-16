const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

const crypto = require('../lib/crypto')

module.exports = {
  create,
  exists,
  getById,
  getByName,
}

function create (username, password, testDb) {
  const hash = crypto.getHash(password)
  const connection = testDb || knex

  return connection('members')
    .insert({
      username: username,
      hash: hash
    })
}

function exists (username, testDb) {
  const connection = testDb || knex
  return connection('members')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getById (id, testDb) {
  const connection = testDb || knex
  return connection('members')
    .select('id', 'username')
    .where('id', id)
}

function getByName (username, testDb) {
  const connection = testDb || knex
  return connection('members')
    .select('*')
    .where('username', username)
}
