
import test from 'ava'
import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import sinon from 'sinon'

import '../setup-dom'
import {PureSignInFormContainer} from '../../client/containers/SignInFormContainer'

const store = createStore((state = {auth: {}}, action) => state)

test('LoginForm sends username and password to loginUser function from props', t => {
  const loginUser = sinon.stub()
  const wrapper = mount(<Provider store={store}><PureLoginForm loginUser={loginUser}/></Provider>)
  wrapper.find('input[name="username"]').simulate('change', {target: {name: 'username', value: 'test'}})
  wrapper.find('input[name="password"]').simulate('change', {target: {name: 'password', value: 'pass'}})
  wrapper.find('button').simulate('click')
  t.is(loginUser.calledWith({username: 'test', password: 'pass'}), true)
})
