import test from 'ava'
import nock from 'nock'
import sinon from 'sinon'

import { initialState } from './helpful/initialState'
import './setup-dom'
import * as api from '../../client/api'

test.cb('Get clothing success dispatches correct actions', t => {
  const scope = nock('http://localhost:80')
    .get('/api/v1/clothes')
    .reply(200, initialState.clothing.clothes)

  const dispatch = sinon.stub()
    .onFirstCall()
    .callsFake((action) => {
      t.is(action.type, 'FETCH_CLOTHING')
      t.is(action.message, 'Loading clothes...')
    })
    .onSecondCall()
    .callsFake((action) => {
      t.is(action.type, 'GET_CLOTHING')
      t.is(action.clothes[0].id, 1)
    })
    .onThirdCall()
    .callsFake((action) => {
      t.is(action.type, 'POSSIBLE_FILTERS')
      t.is(action.filterObject.brand[0], 'Baby Factory')
      t.end()
      scope.done()
    })

  api.getAllClothing()(dispatch)
})
