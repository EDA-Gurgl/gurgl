import React from 'react'

export const CheckoutButton = props => {
  let cartCount = props.cartCount
  return cartCount ? (
    <p>
      <button
        className="cart-checkout-button"
        onClick={() => {
          this.checkout()
        }}
      >
        CHECKOUT ({cartCount})
      </button>
    </p>
  ) : (
    <div />
  )
}
