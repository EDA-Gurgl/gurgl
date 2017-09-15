export const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    product
  }
}

export const deleteFromCart = productId => {
  return {
    type: 'DELETE_FROM_CART',
    id: productId
  }
}

export const checkout = cart => {
  return {
    type: 'CHECKOUT_REQUEST',
    cart
  }
}
