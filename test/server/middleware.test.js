const test = require('ava')
const httpMocks = require('node-mocks-http')
const decode = require('jwt-decode')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

const a = require('../../server/lib/auth')

test('createToken creats correct token', t => {
  let encodedToken = a.createToken({name: 'test'}, 'imasecret')
  let decodedToken = decode(encodedToken)
  t.is(decodedToken.name, 'test')
})

test.cb('Handle error returns next if there is no error', t => {
  let request = httpMocks.createRequest({
    method: 'GET',
    user: {
      name: 'test'
    }
  })
  let response = httpMocks.createResponse()
  let next = () => {
    t.pass()
    t.end()
  }
  a.handleError(null, request, response, next)
})

test.cb('Handle error returns res status 403 if there is error', t => {
  let request = httpMocks.createRequest({
    method: 'GET',
    user: {
      name: 'test'
    }
  })
  let response = httpMocks.createResponse()
  let next = () => {
    t.fail()
    t.end()
  }
  a.handleError('error', request, response, next)
  let body = JSON.parse(response._getData())
  t.is(body.message, "Access to this resource was denied.")
  t.is(response.statusCode, 403)
  t.end()
})
