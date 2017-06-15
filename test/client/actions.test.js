import test from 'ava'

import { initialState } from './helpful/initialState'
import { setSearch } from '../../client/actions/search'
import { setFilters, updateFilter } from '../../client/actions/clothing'

test('Setting search returns correct object', t => {
  let searchObject = setSearch('testing')
  t.is(searchObject.type, 'RECEIVE_SEARCH')
  t.is(searchObject.searchTerm, 'testing')
})

test('Initialising filters returns correct object', t => {
  let filter = setFilters(initialState.clothing)
  t.is(filter.type, 'POSSIBLE_FILTERS')
  t.is(filter.filterObject.size.length, 2)
  t.is(filter.filterObject.style.length, 2)
  t.is(filter.filterObject.brand.length, 1)
})

test('Initialising filters returns correct object', t => {
  let filterObject = updateFilter('size', 32)
  t.is(filterObject.type, 'UPDATE_FILTER')
  t.is(filterObject.kind, 'size')
  t.is(filterObject.term, 32)
})