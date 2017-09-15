import React from 'react'

export const CheckoutButton = props => {
  let cartCount = props.cart.length || 0
  return cartCount ? (
    <p>
      <button
        className="cart-checkout-button"
        onClick={() => {
          window.location = '/#/cart'
        }}
      >
        CHECKOUT ({cartCount})
      </button>
    </p>
  ) : (
    <div />
  )
}

export const ConfirmCheckoutButton = props => {
  let cartCount = props.cart.length || 0
  let checkout = props.checkout
  return cartCount ? (
    <div className="centered">
      <button
        className="cart-confirm-checkout"
        onClick={() => {
          checkout('cart')
        }}
      >
        CONFIRM CHECKOUT
      </button>
    </div>
  ) : (
    <div />
  )
}
