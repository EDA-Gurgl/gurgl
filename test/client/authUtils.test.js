import test from 'ava'
import nock from 'nock'
import jwt from 'jsonwebtoken'

import './setup-dom'
import request from '../../client/utils/api'
import serverAuth from '../../server/lib/auth'
import * as auth from '../../client/utils/auth'

test('isAuthenticated returns false if user not logged in', t => {
  t.is(auth.isAuthenticated(), false)
})

test('isAuthenticated returns true if user logged in', t => {
  global.window.localStorage.setItem('token', serverAuth.createToken({ name: 'test' }, 'imasecret'))
  t.is(auth.isAuthenticated(), true)
  global.window.localStorage.setItem('token', '')
})

test('isAuthenticated returns false if user token expired', t => {
  global.window.localStorage.setItem('token', jwt.sign({ name: 'test' }, 'imasecret', {
    expiresIn: 0
  }))
  t.is(auth.isAuthenticated(), false)
  global.window.localStorage.setItem('token', '')
})

test('saveUserToken saves to storage and returns decoded token', t => {
  let decoded = auth.saveUserToken(serverAuth.createToken({ name: 'test' }, 'imasecret'))
  let storage = global.window.localStorage
  t.not(storage.getItem('token'), '')
  t.is(decoded.name, 'test')
})

test('getUserTokenInfo returns decoded token', t => {
  global.window.localStorage.setItem('token', serverAuth.createToken({ name: 'test' }, 'imasecret'))
  let info = auth.getUserTokenInfo()
  t.is(info.name, 'test')
})

test('getUserTokenInfo returns null if no token exists', t => {
  global.window.localStorage.setItem('token', '')
  let info = auth.getUserTokenInfo()
  t.is(info, null)
})

test('removeUser sets token to null', t => {
  global.window.localStorage.setItem('token', serverAuth.createToken({ name: 'test' }, 'imasecret'))
  auth.removeUser()
  t.is(auth.getUserTokenInfo(), null)
})

test('Sending api request while authenticated sets header appropriately', t => {
  let token = serverAuth.createToken({ name: 'test' }, 'imasecret')
  global.window.localStorage.setItem('token', token)

  const scope = nock('http://localhost:80')
    .post('/api/v1/test')
    .reply(200)

  return request('post', '/test', '')
    .then((response) => {
      t.is(response.req._headers.authorization, `Bearer ${token}`)
      scope.done()
    })
})
