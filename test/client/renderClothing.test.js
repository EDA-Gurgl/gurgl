import test from 'ava'
import sinon from 'sinon'

import './setup-dom'
import store from '../../client/store'
import * as faves from '../../client/actions/favourites'
import * as r from '../../client/components/helpers/renderClothing'

test('isItemInFavourites returns correct button if item is in favourites', t => {
  const favourites = [{id:1},{id:2},{id:3}]
  const button = r.isItemInFavourites({id:2}, favourites, true)
  t.is(button.props.className.includes('favourited'), true)
  t.is(button.props.className.includes('disabled'), false)
})

test('isItemInFavourites returns correct button if item is not in favourites', t => {
  const favourites = [{id:1},{id:2},{id:3}]
  const button = r.isItemInFavourites({id:4}, favourites, true)
  t.is(button.props.className.includes('favourited'), false)
  t.is(button.props.className.includes('disabled'), true)
})

test('isItemInFavourites returns correct button if user is not authenticated', t => {
  const favourites = [{id:1},{id:2},{id:3}]
  const button = r.isItemInFavourites({id:4}, favourites, false)
  t.is(button, '')
})

test('arrayTo2d returns correctly dimensionalised array', t => {
  const initialArray = [1,2,3,4,5,6,7,8,9,10]
  const two2dArray = r.arrayTo2d(initialArray)
  t.is(two2dArray.length, 4)
  t.is(two2dArray[0][2], 3)
  t.is(two2dArray[3][0], 10)
})

test('isItemInFavourites returns correct button if user is authenticated', t => {
  const favourites = [{id:1},{id:2},{id:3}]
  const button = r.isItemInFavourites({id:4}, favourites, true)
  t.is(typeof button.props.onClick, "function")
  t.is(button.props.children, "★")
})

test('toggleFavourite dispatches delete favourite', t => {
  sinon.stub(store, 'dispatch')
  sinon.stub(faves, 'deleteFavourite')

  r.toggleFavourite(true, 5)

  t.is(store.dispatch.calledOnce, true)
  t.is(faves.deleteFavourite.calledWith(5), true)
  store.dispatch.restore()
})

test('toggleFavourite dispatches add favourite', t => {
  sinon.stub(store, 'dispatch')
  sinon.stub(faves, 'addFavourite')

  r.toggleFavourite(false, 5)

  t.is(store.dispatch.calledOnce, true)
  t.is(faves.addFavourite.calledWith(5), true)
  store.dispatch.restore()
})

test('renderItem returns correct item', t => {
  // sinon.stub(r, 'isItemInFavourites')

  const favourites = [{id:1},{id:2},{id:3}]
  const testItem = {id: 1, photo1: 'testPhoto', title: 'test'}
  const item = r.renderItem(testItem, favourites, true)

  t.is(item.props.className.includes('clothingItem'), true)
  t.is(item.props.children[0].props.to, '/clothing/1')
  t.is(item.props.children[2].props.children[2].props.children, 'test')

})
