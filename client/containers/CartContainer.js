import React, { Component } from 'react'
import { CartItem } from '../components/CartItem'
import { connect } from 'react-redux'
import { deleteFromCart, checkout } from '../actions/cart'
import { ConfirmCheckoutButton } from '../components/helpers/cartButtons'

export class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
  }

  removeItem (e) {
    this.props.dispatch(deleteFromCart(e.target.id))
  }

  checkout (cart) {
    console.log('Checkout')
    // this.props.dispatch(checkout(cart))
  }

  render () {
    let emptyCart = null
    this.props.products.length === 0 ? (
      (emptyCart = <div className="centered">Your cart is empty.</div>)
    ) : (
      <div />
    )
    return (
      <div>
        <h1>My Cart</h1>
        {emptyCart}
        <CartItem
          products={this.props.products}
          removeItem={this.removeItem.bind(this)}
        />
        <ConfirmCheckoutButton
          cart={this.props.products}
          checkout={this.checkout.bind(this)}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    products: state.cart
  }
}

export default connect(mapStateToProps)(Cart)
