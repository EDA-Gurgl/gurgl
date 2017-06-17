import test from 'ava'

import './setup-dom'
import { mapStateToProps, filterCategory, filterAll } from '../../client/containers/ClothingContainer'
import { initialState } from './helpful/initialState'

test('Loads all clothing items from store', t => {
  let initialStateLocal = {...initialState}
  initialStateLocal.filterSelection = {
    size: [],
    brand: [],
    style: []
  }
  const propsObject = mapStateToProps(initialStateLocal)
  t.is(propsObject.clothing.length, 2)
  t.is(propsObject.clothing[0].id, 1)
})

test('Load only clothing items from store that match search', t => {
  let initialStateLocal = {...initialState}
  initialStateLocal.filterSelection = {
    size: [],
    brand: [],
    style: []
  }
  initialStateLocal.search = 'search'
  const propsObject = mapStateToProps(initialStateLocal)
  t.is(propsObject.clothing.length, 1)
  t.is(propsObject.clothing[0].id, 2)
})

test('Filter Category returns items correctly filtered in specified category', t => {
  const filteredObject = filterCategory('size', '0-3 months', initialState.clothing)
  t.is(filteredObject.length, 1)
  t.is(filteredObject[0].id, 1)
  t.is(filteredObject[0].size_description, '0-3 months')
})

test('If no filters given filter Category returns original item list', t => {
  const filteredObject = filterCategory('size', [], initialState.clothing)
  t.is(filteredObject.length, 2)
  t.is(filteredObject[0].id, 1)
  t.is(filteredObject[0].size_description, '0-3 months')
})

test('Filter All returns items correctly filtered in all categories', t => {
  const filterSelections = {
    size: ['0-3 months'],
    style: ['Babygrows and Vests'],
    brand: []
  }
  const filteredObject = filterAll(initialState.clothing, filterSelections, 0)
  t.is(filteredObject.length, 1)
  t.is(filteredObject[0].id, 1)
  t.is(filteredObject[0].size_description, '0-3 months')
})

test('If no filters selected filter All returns original clothes', t => {
  const filterSelections = {
    size: [],
    style: [],
    brand: []
  }
  const filteredObject = filterAll(initialState.clothing, filterSelections, 0)
  t.is(filteredObject.length, 2)
  t.is(filteredObject[0].id, 1)
  t.is(filteredObject[0].size_description, '0-3 months')
})
