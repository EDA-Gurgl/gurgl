function search (state = '', action) {
  switch (action.type) {
    case 'RECEIVE_SEARCH':
      return action.searchTerm
    default:
      return state
  }
}

export default search
