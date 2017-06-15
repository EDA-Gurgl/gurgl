export const search = (term) => {
  return {
    type: 'RECEIVE_SEARCH',
    searchTerm: term
  }
}
