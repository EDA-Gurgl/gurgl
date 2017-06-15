export const setSearch = (term) => {
  return {
    type: 'RECEIVE_SEARCH',
    searchTerm: term
  }
}
