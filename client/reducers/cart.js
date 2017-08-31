const initialState = {
  products: []
}
const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKOUT_REQUEST':
      return initialState
    case 'CHECKOUT_FAILURE':
      return action.cart
    default:
      return {
        state
      }
  }
}

export default cart
