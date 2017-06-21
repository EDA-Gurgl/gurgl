export default function favourites (state = {
  isFetching: false,
  userFavourites: []
}, action = {}) {
  switch (action.type) {
    case 'FAVOURITES_REQUEST':
      return {
        ...state,
        isFetching: true,
        message: action.message
      }
    case 'FAVOURITES_SUCCESS':
      return {
        ...state,
        isFetching: false,
        userFavourites: action.favourites
      }
    case 'FAVOURITES_FAILURE':
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
