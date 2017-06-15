import test from 'ava'
import request from 'supertest'

import server from '../../server/server'

let configureDatabase = require('./helpers/database-config')
configureDatabase(test, server)

test.skip('GET /clothes returns all entries', t => {
  request(t.context.server)
    .get('/clothes')
    .expect(200)
    .end((err, res) => {
      console.log('wtf')
      if (err) throw err
      t.is(res.body[0].id, 100)
      t.ifError(err)
      t.end()
    })
})
