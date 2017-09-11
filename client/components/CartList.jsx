import React, { Component } from 'react'
import { CartItem } from './CartItem'
import { connect } from 'react-redux'
import { deleteFromCart } from '../actions/cart'

class Cart extends Component {
  removeItem (e) {
    this.props.dispatch(deleteFromCart(e.target.id))
  }

  render () {
    return (
      <div>
        <h1>My Cart</h1>
        <CartItem
          products={this.props.products}
          removeItem={this.removeItem.bind(this)}
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
