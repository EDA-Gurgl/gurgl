import test from 'ava'

import search from '../../client/reducers/search'
import { setSearch } from '../../client/actions/search'

test('Default state is an empty string', t => {
  t.is(search(), '')
})

test('New search term updates state', t => {
  let state = ''
  let newState = search(state, setSearch('testing'))
  t.is(newState, 'testing')
})
