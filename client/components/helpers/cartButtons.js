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
