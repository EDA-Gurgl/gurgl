import test from 'ava'
import React from 'react'
import {shallow, mount} from 'enzyme'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import sinon from 'sinon'

import './setup-dom'
import { mapStateToProps } from '../../client/containers/ClothingContainer'

let initialState = {
  clothing: [{
    id: 1,
    size_id: 32,
    style_id: 8,
    brand_id: 5,
    condition_id: 22,
    status_id: 51,
    description: 'Testing',
    photo1: '/images/babyg_2.jpg',
    photo2: ''
  },
  {
    id: 2,
    size_id: 32,
    style_id: 8,
    brand_id: 5,
    condition_id: 22,
    status_id: 51,
    description: 'Testing search',
    photo1: '/images/babyg_1.jpg',
    photo2: ''
  }],
  search: ''
}

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
