import test from 'ava'
import request from 'supertest'
const decode = require('jwt-decode')

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


  const originalCount = 11

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


test.cb.only('POST /login ', t => {
  process.env.JWT_SECRET='secret'
  const existingUser = {
    username: 'existinguser',
    password: 'password'
  }

  request(t.context.server)
    .post('/api/v1/login')
    .send(existingUser)
    .expect(200)
    .end((err, res) => {
      t.is(decode(res.body.token).name, 'Existing User')
      request(t.context.server)
      ///test private route
      .get('/api/v1/account')
      .set('Authorization', `Bearer ${res.body.token}`)
      .expect(200)
      .end((err, res) => {
              if (err) throw err
              t.is(res.body.user, 'Your user ID is: 61')
              t.end()
      })
  })
})
