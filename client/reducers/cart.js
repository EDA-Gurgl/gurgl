const initialState = {
  products: []
}
const cart = (state = initialState.products, action) => {
  let items = [...state]

  switch (action.type) {
    case 'ADD_TO_CART':
      let product = state.find(product => product.id === action.product.id)
      if (product) return state
      return [...state, action.product]
    case 'DELETE_FROM_CART':
      return items.filter(product => product.id != action.id)
    case 'CHECKOUT_REQUEST':
      return initialState
    case 'CHECKOUT_FAILURE':
      return action.cart
    default:
      return state
  }
}

export default cart
