import test from 'ava'

import { initialState } from './helpful/initialState'
import search from '../../client/reducers/search'
import errors from '../../client/reducers/errors'
import { setSearch } from '../../client/actions/search'
import { setError } from '../../client/actions/errors'
import clothing from '../../client/reducers/clothing'
import { setClothes, setFilters, updateFilter, fetchClothes } from '../../client/actions/clothing'
import possibleFilters from '../../client/reducers/possibleFilters'
import filterSelection from '../../client/reducers/filterSelection'

test('Default state for search is an empty string', t => {
  t.is(search(), '')
})

test('New search term updates state', t => {
  let state = ''
  let newState = search(state, setSearch('testing'))
  t.is(newState, 'testing')
})

test('Default state for error is correct', t => {
  t.is(errors().message, null)
  t.is(errors().showClear, true)
})

test('New error message updates error reducer', t => {
  let state = ''
  let newState = errors(state, setError('test error', false))
  t.is(newState.message, 'test error')
  t.is(newState.showClear, false)
})

test('Default state for clothing is an object with clothes an empty array', t => {
  t.is(clothing().clothes.length, 0)
})

test('Correct state is returned when setting clothes', t => {
  let state = {clothes: []}
  let newState = clothing(state, setClothes(['this is a drill']))
  t.is(newState.clothes[0], 'this is a drill')
})

test('When fetching clothes, clothing state displays message', t => {
  let state = []
  let newState = clothing(state, fetchClothes('test'))
  t.is(newState.message, 'test')
})

test('Default state for filterSelection is object with empty arrays for all keys', t => {
  let freshState = possibleFilters()
  Object.keys(freshState).forEach((key) => {
    t.is(freshState[key].length, 0)
  })
})

test('New object passed in sets state', t => {
  let state = {size: [], style: [], brand: []}
  let newState = possibleFilters(state, setFilters(initialState.clothing.clothes))
  t.is(newState.size.length, 2)
  t.is(newState.brand.length, 1)
  t.is(newState.brand[0], 'Baby Factory')
  t.is(newState.style.length, 2)
})

test('Default state for filterSelection is object with empty arrays for all keys', t => {
  let freshState = filterSelection()
  Object.keys(freshState).forEach((key) => {
    t.is(freshState[key].length, 0)
  })
})

test('If filter not in state it is added', t => {
  let state = {size: [], style: [], brand: ['Baby Factory']}
  let newState = filterSelection(state, updateFilter('brand', 'Kmart'))
  t.is(newState.brand.length, 2)
  t.is(newState.brand[1], 'Kmart')
})

test('If filter already in state it is removed when updating', t => {
  let state = {size: [], style: [], brand: ['Baby Factory']}
  let newState = filterSelection(state, updateFilter('brand', 'Baby Factory'))
  t.is(newState.brand.length, 0)
})
