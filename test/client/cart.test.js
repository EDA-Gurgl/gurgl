import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Cart } from '../../client/containers/CartContainer'
import cart from '../../client/reducers/cart'
import { CartItem } from '../../client/components/CartItem'
import { addToCart } from '../../client/actions/cart'

const initialState = {
  products: []
}

test('Cart should renders CartItem', t => {
  const wrapper = shallow(<Cart />)
  t.true(wrapper.containsMatchingElement(<CartItem />))
})

test('CartItem should start with an empty list', t => {
  const wrapper = shallow(<Cart />)
  t.deepEqual(wrapper.state('products'), [])
})

// test('it should adds items to the list', t => {
//   const wrapper = shallow(<Cart />)
//   wrapper.instance().addItem('1', 'Yoga guru')
//   t.is(wrapper.state('products')[0].name, 'Yoga guru')
//   t.is(wrapper.state('products').length, 1)
// })

// test('it should remove item from the list', t => {
//   const wrapper = shallow(<CartContainer />)
//   wrapper.instance().addItem('1', 'Yoga guru')
//   wrapper.instance().removeItem(0)
//   t.deepEqual(wrapper.state('products'), [])
//   t.is(wrapper.state('products').length, 0)
// })

test('it should render list of products in CartList', t => {
  let products = [{ '1': 'Yoga Guru' }, { '2': 'Silent Night' }]
  const wrapper = shallow(<CartItem products={products} />)
  t.is(wrapper.find('.cart-wrapper').exists(), true)
  t.is(wrapper.find('.cart-wrapper').children().length, 2)
})

test('Reducers of cart should provide initial state', t => {
  t.deepEqual(cart(undefined, {}), initialState.products)
})

test('addToCart action should return ADD_TO_CART type, product object', t => {
  let productToAdd = { id: '134', title: 'Skyblue Shirt' }
  let cartAction = addToCart(productToAdd)
  t.is(cartAction.type, 'ADD_TO_CART')
  t.is(cartAction.product.id, '134')
  t.is(cartAction.product.title, 'Skyblue Shirt')
})
