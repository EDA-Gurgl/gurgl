import test from 'ava'
import nock from 'nock'
import sinon from 'sinon'
import jwt from 'jsonwebtoken'

import serverAuth from '../../server/lib/auth'
import './setup-dom'
import * as login from '../../client/actions/login'
import * as logout from '../../client/actions/logout'
import * as register from '../../client/actions/register'

test('Login request returns correct object', t => {
  let loginObject = login.requestLogin()
  t.is(loginObject.type, login.LOGIN_REQUEST)
  t.is(loginObject.isFetching, true)
  t.is(loginObject.isAuthenticated, false)
})

test('Login success returns correct object', t => {
  let loginObject = login.receiveLogin('test')
  t.is(loginObject.type, login.LOGIN_SUCCESS)
  t.is(loginObject.isFetching, false)
  t.is(loginObject.isAuthenticated, true)
  t.is(loginObject.user, 'test')
})

test('Login fail returns correct object', t => {
  let loginObject = login.loginError()
  t.is(loginObject.type, login.LOGIN_FAILURE)
  t.is(loginObject.isFetching, false)
  t.is(loginObject.isAuthenticated, false)
})

test.cb('Login success dispatches correct actions', t => {
  const scope = nock('http://localhost:80')
    .post('/api/v1/login')
    .reply(200, { token: serverAuth.createToken({ name: 'test' }, 'imasecret') })

  const dispatch = sinon.stub()
  .onFirstCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGIN_REQUEST')
  })
  .onSecondCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGIN_SUCCESS')
    t.is(action.user.name, 'test')
    t.end()
    scope.done()
  })

  login.loginUser('test', () => {})(dispatch)
})

test.cb('Login 500 error dispatches correct action', t => {
  const scope = nock('http://localhost:80')
    .post('/api/v1/login')
    .reply(500)

  const dispatch = sinon.stub()
  .onFirstCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGIN_REQUEST')
  })
  .onSecondCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGIN_FAILURE')
  })
  .onThirdCall()
  .callsFake((action) => {
    t.is(action.type, 'SET_ERROR')
    t.is(action.message, "We're sorry, something went wrong while trying to log you in! Please try again")
    t.is(action.showClear, true)
    t.end()
    scope.done()
  })

  login.loginUser('test', () => {})(dispatch)
})

test.cb('Login forbidden error dispatches correct action', t => {
  const scope = nock('http://localhost:80')
    .post('/api/v1/login')
    .reply(403)

  const dispatch = sinon.stub()
  .onFirstCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGIN_REQUEST')
  })
  .onSecondCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGIN_FAILURE')
  })
  .onThirdCall()
  .callsFake((action) => {
    t.is(action.type, 'SET_ERROR')
    t.is(action.message, 'Your email or password is incorrect, please try again')
    t.is(action.showClear, true)
    t.end()
    scope.done()
  })

  login.loginUser('test', () => {})(dispatch)
})

test.cb('Logout dispatches correct actions', t => {
  const dispatch = sinon.stub()
  .onFirstCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGOUT_REQUEST')
  })
  .onSecondCall()
  .callsFake((action) => {
    t.is(action.type, 'LOGOUT_SUCCESS')
    t.end()
  })

  logout.logoutUser(() => {})(dispatch)
})

test('Logout request returns correct object', t => {
  let logoutObject = logout.requestLogout()
  t.is(logoutObject.type, 'LOGOUT_REQUEST')
  t.is(logoutObject.isFetching, true)
  t.is(logoutObject.isAuthenticated, true)
})

test('Logout success returns correct object', t => {
  let logoutObject = logout.receiveLogout()
  t.is(logoutObject.type, 'LOGOUT_SUCCESS')
  t.is(logoutObject.isFetching, false)
  t.is(logoutObject.isAuthenticated, false)
})

test('Register request returns correct object', t => {
  let registerObject = register.requestRegister('test')
  t.is(registerObject.type, register.REGISTER_REQUEST)
  t.is(registerObject.isFetching, true)
  t.is(registerObject.isAuthenticated, false)
  t.is(registerObject.creds, 'test')
})

test('Register fail returns correct object', t => {
  let registerObject = register.registerError()
  t.is(registerObject.type, register.REGISTER_FAILURE)
  t.is(registerObject.isFetching, false)
  t.is(registerObject.isAuthenticated, false)
})

test.cb('Register success dispatches correct actions', t => {
  const scope = nock('http://localhost:80')
    .post('/api/v1/register')
    .reply(200, {
      'token': jwt.sign({}, 'secret', {
        expiresIn: 60 * 60 * 24
      })
    })

  const dispatch = sinon.stub()
        .onFirstCall()
        .callsFake((action) => {
          t.is(action.type, 'REGISTER_REQUEST')
        })
        .onSecondCall()
        .callsFake((action) => {
          t.is(action.type, 'LOGIN_SUCCESS')
          t.is(action.isAuthenticated, true)
          t.end()
          scope.done()
        })

  const callback = register.registerUser({username: 'test', password: 'password'}, () => {})
  callback(dispatch)
})

test.cb('Register 500 error dispatches correct actions', t => {
  const scope = nock('http://localhost:80')
    .post('/api/v1/register')
    .reply(500)

  const dispatch = sinon.stub()
        .onFirstCall()
        .callsFake((action) => {
          t.is(action.type, 'REGISTER_REQUEST')
        })
        .onSecondCall()
        .callsFake((action) => {
          t.is(action.type, 'REGISTER_FAILURE')
          t.is(action.isAuthenticated, false)
        })
        .onThirdCall()
        .callsFake((action) => {
          t.is(action.type, 'SET_ERROR')
          t.is(action.message, "We're sorry, something went wrong while trying to register you! Please try again")
          t.is(action.showClear, true)
          t.end()
          scope.done()
        })

  const callback = register.registerUser({username: 'test', password: 'password'}, () => {})
  callback(dispatch)
})

test.cb('Register 409 error dispatches correct actions', t => {
  const scope = nock('http://localhost:80')
    .post('/api/v1/register')
    .reply(409)

  const dispatch = sinon.stub()
        .onFirstCall()
        .callsFake((action) => {
          t.is(action.type, 'REGISTER_REQUEST')
        })
        .onSecondCall()
        .callsFake((action) => {
          t.is(action.type, 'REGISTER_FAILURE')
          t.is(action.isAuthenticated, false)
        })
        .onThirdCall()
        .callsFake((action) => {
          t.is(action.type, 'SET_ERROR')
          t.is(action.message, "This username appears to be taken")
          t.is(action.showClear, true)
          t.end()
          scope.done()
        })

  const callback = register.registerUser({username: 'test', password: 'password'}, () => {})
  callback(dispatch)
})
