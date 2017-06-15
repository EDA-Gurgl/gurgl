import test from 'ava'

import './setup-dom'
import { mapStateToProps } from '../../client/containers/ClothingContainer'
import { initialState } from './helpful/initialState'

test('Loads all clothing items from store', t => {
  const propsObject = mapStateToProps(initialState)
  t.is(propsObject.clothing.length, 2)
  t.is(propsObject.clothing[0].id, 1)
})

test('Load only clothing items from store that match search', t => {
  initialState.search = 'search'
  const propsObject = mapStateToProps(initialState)
  t.is(propsObject.clothing.length, 1)
  t.is(propsObject.clothing[0].id, 2)
})
