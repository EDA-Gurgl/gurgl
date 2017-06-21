import test from 'ava'
import React from 'react'
import {mount} from 'enzyme'
import {MemoryRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import sinon from 'sinon'
import {createStore} from 'redux'

import './setup-dom'
import { SingleView } from '../../client/components/SingleView'
import { initialState } from './helpful/initialState'

const store = createStore((state = {
  search: '',
  auth: {
    isFetching: false,
    isAuthenticated: false,
    user: null,
    errorMessage: ''
  },
  possibleFilters: {
    style: [],
    brand: [],
    size: []
  },
  filterSelection: {
    style: [],
    brand: [],
    size: []
  }
}, action) => state)

SingleView.prototype.componentWillMount = () => {}

test('Displays one item from store', t => {
  sinon.stub(store, 'dispatch')
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <SingleView item={initialState.clothing.clothes[0]}
        favourites={[]}/>
      </Provider>
    </MemoryRouter>
  )

  t.is(wrapper.find('.item').length, 1)
})

test('Display correct message if no clothes passed in', t => {
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <SingleView favourites={[]}/>
      </Provider>
    </MemoryRouter>
  )
  t.is(wrapper.find('.item').exists(), false)
  t.is(wrapper.find('.itemContainer').text(), 'Back to clothingBack to home')
})
