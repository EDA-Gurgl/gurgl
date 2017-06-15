import test from 'ava'
import nock from 'nock'

import { initialState } from './helpful/initialState'
import * as api from '../../client/api'

test.cb('Get clothing success dispatches get clothing', t => {
  const scope = nock('http://localhost:80')
    .get('/api/v1/clothes')
    .reply(200, initialState.clothing)

  api.getAllClothing()((dispatch) => {
    t.is(dispatch.type, 'GET_CLOTHING')
    t.is(dispatch.clothes[0].id, 1)
    t.is(dispatch.clothes.length, 2)
    t.end()
    scope.done()
  })
})
