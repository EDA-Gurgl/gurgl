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
      if (err) throw err
      t.is(res.body[0].id, 100)
      t.ifError(err)
      t.end()
    })
})

test.cb('GET /clothes/:id returns one entry', t => {
  request(t.context.server)
    .get('/api/v1/clothes/100')
    .expect(200)
    .end((err, res) => {
      if (err) throw err
      t.is(res.body.id, 100)
      t.end()
    })
})
