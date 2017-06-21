import test from 'ava'
import React from 'react'
import {mount} from 'enzyme'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import sinon from 'sinon'
import { MemoryRouter } from 'react-router-dom'

import './setup-dom'
import { Nav } from '../../client/components/Nav'

const store = createStore((state = {
  search: '',
  auth: {
    isFetching: false,
    isAuthenticated: false,
    user: null,
    errorMessage: ''
  }}, action) => state)

test('Clicking on search submit button fires off setSearch action', t => {
  let dispatch = sinon.stub()
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <Nav store={store}
          location={{pathname: '/clothing'}}
          auth={{
            isAuthenticated: false,
            user: null
          }}
          dispatch={dispatch}/>
      </Provider>
    </MemoryRouter>
  )
  wrapper.find('input[name="searchBar"]')
    .simulate('change', {target: {name: 'searchBar', value: 'test'}})
  wrapper.find('button[name="searchSubmit"]')
    .simulate('submit')
  t.is(dispatch.calledWith({ type: 'RECEIVE_SEARCH', searchTerm: 'test' }), true)
})

test('Clicking on search submit button when not on clothing page redirects', t => {
  let historyFunc = sinon.stub()
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <Nav store={store}
          location={{pathname: '/'}}
          auth={{
            isAuthenticated: false,
            user: null
          }}
          dispatch={() => {}}
          history={{push: historyFunc}}/>
      </Provider>
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
      <Provider store={store}>
        <Nav store={store}
          location={{pathname: '/clothing'}}
          auth={{
            isAuthenticated: false,
            user: null
          }}/>
      </Provider>
    </MemoryRouter>
  )
  t.is(wrapper.find('input[name="searchBar"]').exists(), true)
})

test('Highlight nav link that is current page', t => {
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <Nav store={store}
          location={{pathname: '/clothing'}}
          auth={{
            isAuthenticated: false,
            user: null
          }}/>
      </Provider>
    </MemoryRouter>
  )
  t.is(wrapper.find('.selected').text(), 'Clothing')
  t.is(wrapper.find('.selected').length, 1)
})

test('Nav displays login and register buttons when user  not authenticated', t => {
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <Nav
          location={{pathname: '/clothing'}}
          auth={{
            isAuthenticated: false,
            user: null
          }}/>
      </Provider>
    </MemoryRouter>
  )
  t.is(wrapper.find('#Login').length, 1)
  t.is(wrapper.find('#Register').length, 1)
})

test('Nav displays account and logout buttons when user authenticated', t => {
  const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <Nav
        location={{pathname: '/clothing'}}
        auth={{
          isAuthenticated: true,
          user: {
            id: 1
          }
        }}/>
    </Provider>
  </MemoryRouter>
  )

  t.is(wrapper.find('#Account').length, 1)
  t.is(wrapper.find('#logout').length, 1)
})

test('When magnifying glass is clicked, search becomes visible, therefore visible state toggled', t => {
  const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <Nav store={store}
        location={{pathname: '/clothing'}}
        auth={{
          isAuthenticated: false,
          user: null
        }}/>
    </Provider>
  </MemoryRouter>
  )
  t.is(wrapper.find('.search').hasClass('hidden'), true)
  wrapper.find('#openSearch').simulate('click')
  t.is(wrapper.find('.search').hasClass('hidden'), false)
})
