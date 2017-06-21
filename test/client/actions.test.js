import test from 'ava'

import { initialState } from './helpful/initialState'
import { setSearch } from '../../client/actions/search'
import { setError } from '../../client/actions/errors'
import { setFilters, updateFilter, setClothes, fetchClothes } from '../../client/actions/clothing'

test('Setting search returns correct object', t => {
  let searchObject = setSearch('testing')
  t.is(searchObject.type, 'RECEIVE_SEARCH')
  t.is(searchObject.searchTerm, 'testing')
})

test('Initialising filters returns correct object', t => {
  let filter = setFilters(initialState.clothing.clothes)
  t.is(filter.type, 'POSSIBLE_FILTERS')
  t.is(filter.filterObject.size.length, 2)
  t.is(filter.filterObject.style.length, 2)
  t.is(filter.filterObject.brand.length, 1)
})

test('Updating filter returns correct object', t => {
  let filterObject = updateFilter('size', 32)
  t.is(filterObject.type, 'UPDATE_FILTER')
  t.is(filterObject.kind, 'size')
  t.is(filterObject.term, 32)
})

test('setClothes returns all the kit', t => {
  let clothesObject = setClothes(['testing'])
  t.is(clothesObject.type, 'GET_CLOTHING')
  t.is(clothesObject.clothes[0], 'testing')
})

test('setError sets correct error', t => {
  let errorObject = setError('test error')
  t.is(errorObject.type, 'SET_ERROR')
  t.is(errorObject.message, 'test error')
})

test('fetchClothes displays loading message', t => {
  let clothesObject = fetchClothes('test')
  t.is(clothesObject.type, 'FETCH_CLOTHING')
  t.is(clothesObject.message, 'test')
})
