import test from 'ava'
import nock from 'nock'

import { initialState } from './helpful/initialState'
import * as api from '../../client/api'

test.cb('Get clothing success dispatches correct actions', t => {
  const scope = nock('http://localhost:80')
    .get('/api/v1/clothes')
    .reply(200, initialState.clothing)

  let count = 0
  api.getAllClothing()((dispatch) => {
    count++
    if (count === 2) {
      t.is(dispatch.type('FETCH_CLOTHING'))
      t.is(dispatch.message('Loading clothes...'))
      t.end()
      scope.done()
    }
    // if (count === 2) {
    //   t.is(dispatch.type, 'GET_CLOTHING')
    //   t.is(dispatch.clothes[0].id, 1)
    //   t.is(dispatch.clothes.length, 2)
    // } else {
    //   t.is(dispatch.type, 'POSSIBLE_FILTERS')
    //   t.end()
    //   scope.done()
    // }
    // count++
  })
})
