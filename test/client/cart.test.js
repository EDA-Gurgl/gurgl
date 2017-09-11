import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Cart } from '../../client/containers/CartContainer'
import cart from '../../client/reducers/cart'
import { CartItem } from '../../client/components/CartItem'
import { addToCart, deleteFromCart } from '../../client/actions/cart'

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

test('it should render list of products in CartList', t => {
  let products = [{ '1': 'Yoga Guru' }, { '2': 'Silent Night' }]
  const wrapper = shallow(<CartItem products={products} />)
  t.is(wrapper.find('.cart-wrapper').exists(), true)
  t.is(wrapper.find('.cart-wrapper').children().length, 2)
})

test('Reducers of cart should provide initial state', t => {
  t.deepEqual(cart(undefined, {}), initialState.products)
})

test('addToCart action should return ADD_TO_CART type, product info', t => {
  let productToAdd = { id: '134', title: 'Skyblue Shirt' }
  let cartAction = addToCart(productToAdd)
  t.is(cartAction.type, 'ADD_TO_CART')
  t.is(cartAction.product.id, '134')
  t.is(cartAction.product.title, 'Skyblue Shirt')
})

test('deleteFromCart action should return DELETE_FROM_CART type, product id', t => {
  let productToDelete = 134
  let cartAction = deleteFromCart(productToDelete)
  t.is(cartAction.type, 'DELETE_FROM_CART')
  t.is(cartAction.id, 134)
})
