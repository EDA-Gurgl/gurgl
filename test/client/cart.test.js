import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { CartContainer } from '../../client/containers/CartContainer'
import { CartList } from '../../client/components/CartList'

test('CartContainer should renders CartList', t => {
  const wrapper = shallow(<CartContainer />)
  t.true(wrapper.containsMatchingElement(<CartList />))
})

test('CartContainer should start with an empty CartList', t => {
  const wrapper = shallow(<CartContainer />)
  t.deepEqual(wrapper.state('products'), [])
})

test('it should adds items to the list', t => {
  const wrapper = shallow(<CartContainer />)
  wrapper.instance().addItem('1', 'Yoga guru')
  t.is(wrapper.state('products')[0].name, 'Yoga guru')
})

test('it should remove last item from the list', t => {
  const wrapper = shallow(<CartContainer />)
  wrapper.instance().addItem('1', 'Yoga guru')
  wrapper.instance().removeItem('1')
  t.deepEqual(wrapper.state('products'), [])
})
