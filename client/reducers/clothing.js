function clothing (state = {
  clothes: []
}, action = {}) {
  switch (action.type) {
    case 'GET_CLOTHING':
      return { clothes: action.clothes }
    case 'FETCH_CLOTHING':
      return { clothes: [], message: action.message }
    default:
      return state
  }
}

export default clothing
