import test from 'ava'
import request from 'supertest'

import server from '../../server/server'

let configureDatabase = require('./helpers/database-config')
configureDatabase(test, server)

test.cb('GET /clothes returns all entries', t => {
  request(t.context.server)
    .get('/api/v1/clothes')
    .expect(200)
    .end((err, res) => {
      t.is(res.body[0].id, 119)
      t.ifError(err)
      t.end()
    })
})

test.cb('GET /clothes/:id returns one entry', t => {
  request(t.context.server)
    .get('/api/v1/clothes/119')
    .expect(200)
    .end((err, res) => {
      t.is(res.body.id, 119)
      t.end()
    })
})

test.cb('POST /register ', t => {
  process.env.JWT_SECRET='secret'
  const newUser = {
    username: 'testuser',
    name: 'bob bob',
    password: 'testpassword'
  }


  const originalCount = 10

  request(t.context.server)
    .post('/api/v1/register')
    .send(newUser)
    .expect(200)
    .end((err, res) => {
      if (err) throw err
      t.context.connection('members')
      .then((members) => {
      t.is(members.length, originalCount+1)
      t.end()
    })
  })
})
