import test from 'ava'

import { setSearch } from '../../client/actions/search'
import { setClothes } from '../../client/actions/clothing'

test('Setting search returns correct object', t => {
  let searchObject = setSearch('testing')
  t.is(searchObject.type, 'RECEIVE_SEARCH')
  t.is(searchObject.searchTerm, 'testing')
})

test('setClothes returns all the kit', t => {
  let searchObject = setClothes('these are the clothes')
  t.is(searchObject.type, 'GET_CLOTHING')
  t.is(searchObject.clothes, 'these are the clothes')
})
