function possibleFilters (state = {size: [], style: [], brand: []}, action = {}) {
  switch (action.type) {
    case 'POSSIBLE_FILTERS':
      return action.filterObject

    default:
      return state
  }
}

export default possibleFilters
