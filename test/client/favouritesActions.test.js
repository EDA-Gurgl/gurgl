import test from 'ava'
import nock from 'nock'
import sinon from 'sinon'
import './setup-dom'
import * as favourites from '../../client/actions/favourites'


test('requestFavourites returns correct object', t => {
  let requestFavouritesObject = favourites.requestFavourites('test')
  t.is(requestFavouritesObject.type, 'FAVOURITES_REQUEST')
  t.is(requestFavouritesObject.isFetching, true)
  t.is(requestFavouritesObject.message, "test")
})

test('receiveFavourites returns correct object', t => {
  let receiveFavouritesObject = favourites.receiveFavourites('test')
  t.is(receiveFavouritesObject.type, 'FAVOURITES_SUCCESS')
  t.is(receiveFavouritesObject.isFetching, false)
  t.is(receiveFavouritesObject.favourites, "test")
})


test('favouritesError returns correct object', t => {
  let favouritesErrorObject = favourites.favouritesError('test')
  t.is(favouritesErrorObject.type, 'FAVOURITES_FAILURE')
  t.is(favouritesErrorObject.isFetching, false)
})


test.cb('Get user favourites gets you user favourites', t => {
  const scope = nock('http://localhost:80')
  .get('/api/v1/favourites')
  .reply(200, [{test: 'test favourite'}])

  const dispatch = sinon.stub()
    .onFirstCall()
    .callsFake((action) => {
        t.is(action.type, 'FAVOURITES_REQUEST')
        t.is(action.message, "Loading favourites...")
      })
  .onSecondCall()
  .callsFake((action) => {
        t.is(action.type, 'FAVOURITES_SUCCESS')
        t.is(action.favourites.length, 1)
        t.end()
        scope.done()
      })
  favourites.getUserFavourites()(dispatch)
})

test.cb('Get user favourites dispatches correct action upon 500 error', t => {
  const scope = nock('http://localhost:80')
    .get('/api/v1/favourites')
    .reply(500)

  const dispatch = sinon.stub()
    .onFirstCall()
    .callsFake((action) => {
        t.is(action.type, 'FAVOURITES_REQUEST')
        t.is(action.message, "Loading favourites...")
      })
  .onSecondCall()
  .callsFake((action) => {
        t.is(action.type, 'FAVOURITES_FAILURE')
        t.is(action.isFetching, false)
      })
  .onThirdCall()
  .callsFake((action) => {
    t.is(action.type, 'SET_ERROR')
    t.is(action.message, "Oops, something went wrong while trying to load your favourites")
    t.end()
    scope.done()
  })
  favourites.getUserFavourites()(dispatch)
})

test.cb('Get user favourites dispatches correct action upon 403 error', t => {
  const scope = nock('http://localhost:80')
    .get('/api/v1/favourites')
    .reply(403)

  const dispatch = sinon.stub()
    .onFirstCall()
    .callsFake((action) => {
        t.is(action.type, 'FAVOURITES_REQUEST')
        t.is(action.message, "Loading favourites...")
      })
  .onSecondCall()
  .callsFake((action) => {
        t.is(action.type, 'FAVOURITES_FAILURE')
        t.is(action.isFetching, false)
        t.end()
        scope.done()
      })
  favourites.getUserFavourites()(dispatch)
})

test.cb('deleteFavourite deletes a favourite', t => {
  const scope = nock('http://localhost:80')
      .delete('/api/v1/favourites')
      .reply(200, {test:'test test'})

  const dispatch = sinon.stub()
    .onFirstCall()
    .callsFake( (callback) =>{
      t.is(typeof(callback), 'function')
      t.end()
    })
  favourites.deleteFavourite(111)(dispatch)
})

test.cb('deleteFavourite errors appropriately on 403', t => {
  const scope = nock('http://localhost:80')
      .delete('/api/v1/favourites/')
      .reply(403, {test:'test test'})

  const dispatch = sinon.stub()
    .onFirstCall()
    .callsFake( (action) =>{
      t.is(action.type, 'FAVOURITES_FAILURE')
      t.end()
    })
  favourites.deleteFavourite(111)(dispatch)
})

test.cb('deleteFavourite errors appropriately on 500', t => {
  const scope = nock('http://localhost:80')
      .delete('/api/v1/favourites')
      .reply(500)

  const dispatch = sinon.stub()
    .onFirstCall()
    .callsFake((action) =>{
      t.is(action.type, 'FAVOURITES_FAILURE')
    })
    .onSecondCall()
    .callsFake((action) => {
      t.is(action.type, 'SET_ERROR')
      t.is(action.message, 'Oops, something went wrong while trying to delete this favourite')
      t.is(action.showClear, true)
      t.end()
    })
  favourites.deleteFavourite(111)(dispatch)
})




test.cb('addFavourite adds a favourite', t => {
  const scope = nock('http://localhost:80')
      .post('/api/v1/favourites')
      .reply(201)

  const dispatch = sinon.stub()
    .onFirstCall()
    .callsFake((callback) =>{
      t.is(typeof(callback), 'function')
      t.end()
    })
  favourites.addFavourite(111)(dispatch)
})

test.cb('addFavourite errors appropriately on 500', t => {
  const scope = nock('http://localhost:80')
      .post('/api/v1/favourites')
      .reply(500)

  const dispatch = sinon.stub()
    .onFirstCall()
    .callsFake((action) =>{
      t.is(action.type, 'FAVOURITES_FAILURE')
    })
    .onSecondCall()
    .callsFake((action) => {
      t.is(action.type, 'SET_ERROR')
      t.is(action.message, 'Oops, something went wrong while trying to add this favourite')
      t.is(action.showClear, true)
      t.end()
    })
  favourites.addFavourite(111)(dispatch)
})


test.cb('addFavourite errors appropriately on 403', t => {
  const scope = nock('http://localhost:80')
      .post('/api/v1/favourites')
      .reply(403)

  const dispatch = sinon.stub()
    .onFirstCall()
    .callsFake((action) =>{
      t.is(action.type, 'FAVOURITES_FAILURE')
      t.end()
    })
  favourites.addFavourite(111)(dispatch)
})
