import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { CartContainer } from '../../client/containers/CartContainer'
import { CartList } from '../../client/components/CartList'
import cart from '../../client/reducers/cart'

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
  t.is(wrapper.state('products').length, 1)
})

test('it should remove item from the list', t => {
  const wrapper = shallow(<CartContainer />)
  wrapper.instance().addItem('1', 'Yoga guru')
  wrapper.instance().removeItem(0)
  t.deepEqual(wrapper.state('products'), [])
  t.is(wrapper.state('products').length, 0)
})

test('it should render list of products in CartList', t => {
  let products = [{ '1': 'Yoga Guru' }, { '2': 'Silent Night' }]
  const wrapper = shallow(<CartList products={products} />)
  t.is(wrapper.find('.productsList').exists(), true)
  t.is(wrapper.find('ul').children().length, 2)
})

test('Reducers of cart should provide initial state', t => {
  const initialState = {
    products: []
  }
  t.deepEqual(cart(undefined, {}).state, initialState)
})
