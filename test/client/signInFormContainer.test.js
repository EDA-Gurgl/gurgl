import test from 'ava'
import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import sinon from 'sinon'

import './setup-dom'
import SignInFormContainer from '../../client/containers/SignInFormContainer'

const store = createStore((state = {
  search: '',
  auth: {
    isFetching: false,
    isAuthenticated: false,
    user: null,
    errorMessage: ''
  }}, action) => state)

test.skip('Successful login redirects page', t => {
  let historyFunc = sinon.stub().callsFake(console.log)
  sinon.stub(store, 'dispatch')
  const wrapper = mount(
    <Provider store={store}>
      <SignInFormContainer history={{push: historyFunc}} />
    </Provider>
  )

  wrapper.find('input[name="username"]')
    .simulate('change', {target: {name: 'username', value: 'test'}})
  wrapper.find('input[name="password"]')
    .simulate('change', {target: {name: 'password', value: 'testingpassword'}})
  wrapper.find('button[type="submit"]')
    .simulate('submit')

  t.is(historyFunc.calledWith, '/')
})
