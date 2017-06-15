function clothing (state = [], action) {
  switch (action.type) {
    case 'GET_CLOTHING':
      return [...action.clothes]
    default:
      return state
  }
}

export default clothing
