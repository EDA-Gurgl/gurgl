import test from 'ava'
import React from 'react'
import {mount} from 'enzyme'
import {createStore} from 'redux'
import sinon from 'sinon'
import { MemoryRouter } from 'react-router-dom'
import './setup-dom'
import Favourites from '../../client/components/subcomponents/Favourites_Account'

const store = createStore((state = {
  favourites: {
    userFavourites: [{id:'11'},{id:'12'}]
  },
  auth: {
    isFetching: false,
    isAuthenticated: true,
    user: {id: 5},
    errorMessage: ''
  }}, action) => state)


  test('Favourite items are displayed on account page', t => {
    sinon.stub(store, 'dispatch')
    const wrapper = mount(
    <MemoryRouter>
      <Favourites store={store} location={{pathname: '/account/5'}}/>
    </MemoryRouter>
    )
    t.is(wrapper.find('.clothingRow').children().length, 2)
  })
