const initialState = {
  products: []
}
const cart = (state = initialState.products, action) => {
  console.log(action.type)

  switch (action.type) {
    case 'ADD_TO_CART':
      let product = state.find(product => product.id === action.product.id)
      if (product) return state
      return [...state, action.product]
    case 'CHECKOUT_REQUEST':
      return initialState
    case 'CHECKOUT_FAILURE':
      return action.cart
    default:
      return state
  }
}

export default cart
