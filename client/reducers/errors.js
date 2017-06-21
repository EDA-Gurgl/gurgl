function errors (state = {message: null, showClear: true}, action = {}) {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        message: action.message,
        showClear: action.showClear
      }
    default:
      return state
  }
}

export default errors
