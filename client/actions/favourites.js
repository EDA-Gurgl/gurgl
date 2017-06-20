import request from '../utils/api'
import {setError} from './errors'


export function requestFavourites (message) {
  return {
    type: 'FAVOURITES_REQUEST',
    isFetching: true,
    message
  }
}

export function receiveFavourites (favourites) {
  return {
    type: 'FAVOURITES_SUCCESS',
    isFetching: false,
    favourites
  }
}

export function favouritesError () {
  return {
    type: 'FAVOURITES_FAILURE',
    isFetching: false
  }
}

export function getUserFavourites() {
  return (dispatch) => {

    dispatch(requestFavourites("Loading favourites..."))

    return request('get', '/favourites')
      .then((response) => {
        dispatch(receiveFavourites(response.body))
      })
      .catch(err => {
        if (err.status === 403) return dispatch(favouritesError())
          dispatch(favouritesError())
          dispatch(setError("Oops, something went wrong while trying to load your favourites", true))
      })
  }
}


export function deleteFavourite (clothing_id) {
  return (dispatch) => {

    return request('delete', '/favourites', {clothing_id})
      .then((response) => {
        dispatch(getUserFavourites())
      })
      .catch(err => {
          if (err.status === 403) return dispatch(setError("Log in or register to add favourites", true))
          dispatch(setError("Oops, something went wrong while trying to delete this favourite", true))
      })
}
}


export function addFavourite (clothing_id) {
  return (dispatch) => {

    return request('post', '/favourites', {clothing_id})
      .then((response) => {
        dispatch(getUserFavourites())
      })
      .catch(err => {
          if (err.status === 403) return dispatch(setError("Log in or register to add favourites", true))
          dispatch(setError("Oops, something went wrong while trying to add this favourite", true))
      })
  }
}
