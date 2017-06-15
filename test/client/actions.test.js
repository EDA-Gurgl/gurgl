import test from 'ava'

import { setSearch } from '../../client/actions/search'

test('Setting search returns correct object', t => {
  let searchObject = setSearch('testing')
  t.is(searchObject.type, 'RECEIVE_SEARCH')
  t.is(searchObject.searchTerm, 'testing')
  
})
