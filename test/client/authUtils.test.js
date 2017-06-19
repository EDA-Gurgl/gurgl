import test from 'ava'
import nock from 'nock'
import sinon from 'sinon'

import serverAuth from '../../server/lib/auth'
import './setup-dom'
import * as auth from '../../client/utils/auth'

test('isAuthenticated returns false if user not logged in', t => {
  t.is(auth.isAuthenticated(), false)
})

test('isAuthenticated returns true if user logged in', t => {
  global.window.localStorage.setItem('token', serverAuth.createToken({ name: 'test'}, 'imasecret'))
  t.is(auth.isAuthenticated(), true)
  global.window.localStorage.setItem('token', '')
})

test('saveUserToken saves to storage and returns decoded token', t => {
  let decoded = auth.saveUserToken(serverAuth.createToken({ name: 'test'}, 'imasecret'))
  let storage = global.window.localStorage
  t.not(storage.getItem('token'), '')
  t.is(decoded.name, 'test')
})

test('getUserTokenInfo returns decoded token', t => {
  global.window.localStorage.setItem('token', serverAuth.createToken({ name: 'test'}, 'imasecret'))
  let info = auth.getUserTokenInfo()
  t.is(info.name, 'test')
})

test('getUserTokenInfo returns null if no token exists', t => {
  global.window.localStorage.setItem('token', '')
  let info = auth.getUserTokenInfo()
  t.is(info, null)
})

test('removeUser sets token to null', t => {
  global.window.localStorage.setItem('token', serverAuth.createToken({ name: 'test'}, 'imasecret'))
  auth.removeUser()
  t.is(auth.getUserTokenInfo(), null)
})
