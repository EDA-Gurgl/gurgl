const initialState = {
  products: []
}

const addedItem = (state = initialState.products, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.indexOf(action.id) !== -1) {
        return state
      }
      return [...state, { 'action.id': action.name }]
    default:
      return state
  }
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKOUT_REQUEST':
      return initialState
    case 'CHECKOUT_FAILURE':
      return action.cart
    default:
      return state
  }
}

export default cart
