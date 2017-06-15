import test from 'ava'

import search from '../../client/reducers/search'
import { setSearch } from '../../client/actions/search'
import clothing from '../../client/reducers/clothing'
import { setClothes } from '../../client/actions/clothing'

test('Default state is an empty string', t => {
  t.is(search(), '')
})

test('New search term updates state', t => {
  let state = ''
  let newState = search(state, setSearch('testing'))
  t.is(newState, 'testing')
})

test('Default state is an empty array', t => {
  t.is(clothing()[0], undefined)
})

test('Correct state is returned', t => {
  let state = []
  let newState = clothing(state, setClothes(['this is a drill']))
  t.is(newState[0], 'this is a drill')
})
