import test from 'ava'
import React from 'react'
import {mount} from 'enzyme'
import {createStore} from 'redux'
import sinon from 'sinon'
import { MemoryRouter } from 'react-router-dom'
import './setup-dom'
import Nav from '../../client/components/Nav'

const store = createStore((state = {
  search: '',
  auth: {
    isFetching: false,
    isAuthenticated: false,
    user: null,
    errorMessage: ''
  }}, action) => state)

test('Clicking on search submit button fires off setSearch action', t => {
  sinon.stub(store, 'dispatch')
  const wrapper = mount(
    <MemoryRouter>
      <Nav store={store} location={{pathname: '/clothing'}}/>
    </MemoryRouter>
  )
  wrapper.find('input[name="searchBar"]')
    .simulate('change', {target: {name: 'searchBar', value: 'test'}})
  wrapper.find('button[name="searchSubmit"]')
    .simulate('submit')
  t.is(store.dispatch.calledWith({ type: 'RECEIVE_SEARCH', searchTerm: 'test' }), true)
})

test('Clicking on search submit button when not on clothing page redirects', t => {
  let historyFunc = sinon.stub()
  const wrapper = mount(
    <MemoryRouter>
      <Nav store={store} location={{pathname: '/'}} history={{push: historyFunc}}/>
    </MemoryRouter>
  )
  wrapper.find('input[name="searchBar"]')
    .simulate('change', {target: {name: 'searchBar', value: 'test'}})
  wrapper.find('button[name="searchSubmit"]')
    .simulate('submit')
  t.is(historyFunc.calledWith('/clothing'), true)
})

test('Nav has a search bar', t => {
  const wrapper = mount(
  <MemoryRouter>
    <Nav store={store} location={{pathname: '/clothing'}}/>
  </MemoryRouter>
  )
  t.is(wrapper.find('input[name="searchBar"]').exists(), true)
})

test('Highlight nav link that is current page', t => {
  const wrapper = mount(
  <MemoryRouter>
    <Nav store={store} location={{pathname: '/clothing'}}/>
  </MemoryRouter>
  )
  t.is(wrapper.find('.selected').text(), 'Clothing')
  t.is(wrapper.find('.selected').length, 1)
})

test('When magnifying glass is clicked, search becomes visible, therefore visible state toggled', t => {
  const wrapper = mount(
  <MemoryRouter>
    <Nav store={store} location={{pathname: '/clothing'}}/>
  </MemoryRouter>
  )
  t.is(wrapper.find('.search').hasClass('hidden'), true)
  wrapper.find('#openSearch').simulate('click')
  t.is(wrapper.find('.search').hasClass('hidden'), false)
})
