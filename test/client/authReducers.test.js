import test from 'ava'
import sinon from 'sinon'

import './setup-dom'
import auth from '../../client/reducers/auth'
import * as login from '../../client/actions/login'
import * as logout from '../../client/actions/logout'
import * as register from '../../client/actions/register'

let getItemStub = sinon.stub(window.localStorage, 'getItem')
let setItemStub = sinon.stub(window.localStorage, 'setItem')

test('Default local storage has all values falsey', t => {
  let initialState = auth()
  t.is(initialState.isFetching, false)
  t.is(initialState.isAuthenticated, false)
  t.is(initialState.user, null)
  t.is(initialState.errorMessage, '')
})

test('Request login reducer outputs correct object', t => {
  let initialState = auth()
  let newState = auth(initialState, login.requestLogin())
  t.is(newState.isFetching, true)
  t.is(newState.isAuthenticated, false)
  t.is(newState.user, null)
  t.is(newState.errorMessage, '')
})

test('Login fail reducer outputs correct object', t => {
  let initialState = auth()
  let newState = auth(initialState, login.loginError('testing'))
  t.is(newState.isFetching, false)
  t.is(newState.isAuthenticated, false)
  t.is(newState.user, null)
  t.is(newState.errorMessage, 'testing')
})

test('Login success reducer outputs correct object', t => {
  let initialState = auth()
  let newState = auth(initialState, login.receiveLogin('testing'))
  t.is(newState.isFetching, false)
  t.is(newState.isAuthenticated, true)
  t.is(newState.user, 'testing')
  t.is(newState.errorMessage, '')
})

test('Logout success reducer outputs correct object', t => {
  let initialState = auth()
  let newState = auth(initialState, logout.receiveLogout())
  t.is(newState.isFetching, false)
  t.is(newState.isAuthenticated, false)
  t.is(newState.user, null)
  t.is(newState.errorMessage, '')
})

test('Logout request reducer outputs correct object', t => {
  let initialState = auth(login.receiveLogin('testing'))
  let newState = auth(initialState, logout.requestLogout())
  t.is(newState.isFetching, true)
  t.is(newState.isAuthenticated, true)
  t.is(newState.user, 'testing')
  t.is(newState.errorMessage, '')
})

test('Register request reducer outputs correct object', t => {
  let initialState = auth()
  let newState = auth(initialState, register.requestRegister())
  t.is(newState.isFetching, true)
  t.is(newState.isAuthenticated, false)
  t.is(newState.user, null)
  t.is(newState.errorMessage, '')
})

test('Register fail reducer outputs correct object', t => {
  let initialState = auth()
  let newState = auth(initialState, register.registerError('test error'))
  t.is(newState.isFetching, false)
  t.is(newState.isAuthenticated, false)
  t.is(newState.user, null)
  t.is(newState.errorMessage, 'test error')
})
