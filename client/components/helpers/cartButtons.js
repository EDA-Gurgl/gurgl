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
  return cartCount ? (
    <p className="centered">
      <button
        className="cart-confirm-checkout"
        onClick={() => {
          window.location = '/#/cart'
        }}
      >
        CONFIRM CHECKOUT
      </button>
    </p>
  ) : (
    <div />
  )
}
