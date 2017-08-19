function clothing (state = {
  clothes: []
}, action = {}) {
  switch (action.type) {
    case 'GET_CLOTHING':
      return { clothes: action.clothes }
    case 'FETCH_CLOTHING':
      return { clothes: [], message: action.message }
    case 'ADD_NEW_CLOTHING_ITEM':
        return {clothes: action.clothes}
    default:
      return state
  }
}

export default clothing
