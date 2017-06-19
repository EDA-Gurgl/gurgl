import test from 'ava'
import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import sinon from 'sinon'
import {createStore} from 'redux'
import './setup-dom'
import FilterRow from '../../client/components/subcomponents/FilterRow_Clothing'
import { initialState } from './helpful/initialState'

const store = createStore((state = {
  search: '',
  auth: {
    isFetching: false,
    isAuthenticated: false,
    user: null,
    errorMessage: ''
  }}, action) => state)

test('Displays passed in possible filters', t => {
  const wrapper = mount(
    <Provider store={store}>
      <FilterRow
        filter={initialState.possibleFilters}
        selected={{size: [], style: [], brand: []}}/>
    </Provider>)
  t.is(wrapper.find('button').length, 5)
})

test('Gives filters the filterSelected class if they exist in selected object', t => {
  const wrapper = mount(
    <Provider store={store}>
      <FilterRow
        filter={initialState.possibleFilters}
        selected={{size: [], style: [], brand: ['Baby Factory']}}/>
    </Provider>
  )
  t.is(wrapper.find('.filterSelected').length, 1)
  t.is(wrapper.find('button').length, 5)
})

test('Clicking on a button fires a dispatch action with the button type and name', t => {
  sinon.stub(store, 'dispatch')
  const wrapper = mount(
      <FilterRow
        store={store}
        filter={initialState.possibleFilters}
        selected={{size: [], style: [], brand: []}}/>
  )
  wrapper.find('button[name="Baby Factory"]')
    .simulate('click')
  t.is(store.dispatch.calledWith({ type: 'UPDATE_FILTER', kind: 'brand', term: 'Baby Factory' }), true)
})
