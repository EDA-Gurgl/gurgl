const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

const crypto = require('../lib/crypto')

module.exports = {
  create,
  exists,
  getById,
  getByName
}

function create (user, testDb) {
  const hash = crypto.getHash(user.password)
  const connection = testDb || knex
  let newUser = Object.assign({}, user, {hash: hash})
  delete newUser.password
  return connection('members')
    .insert(newUser)
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
    .select('id', 'name', 'phone', 'address', 'email', 'created_on as createdOn', 'username', 'hash', 'role')
    .where('username', username)
}
