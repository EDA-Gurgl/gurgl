import test from 'ava'
import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import sinon from 'sinon'

import './setup-dom'
import Nav from '../../client/components/Nav'

const store = createStore((state = {search: ''}, action) => state)

test('Clicking on search submit button fires off setSearch action', t => {
  sinon.stub(store, 'dispatch')
  const wrapper = mount(<Nav store={store} location={{pathname: '/clothing'}}/>)
  wrapper.find('input[name="searchBar"]')
    .simulate('change', {target: {name: 'searchBar', value: 'test'}})
  wrapper.find('button[name="searchSubmit"]')
    .simulate('click')
  t.is(store.dispatch.calledWith({ type:'RECEIVE_SEARCH', searchTerm: 'test'}), true)
 })

test('Nav has a search bar', t => {
  const wrapper = mount(<Nav store={store} location={{pathname: '/clothing'}}/>)
  t.is(wrapper.find('input[name="searchBar"]').exists(), true)
})
