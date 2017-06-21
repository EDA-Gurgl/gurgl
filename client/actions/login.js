import request from '../utils/api'
import {saveUserToken} from '../utils/auth'
import {setError} from './errors'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export function requestLogin () {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false
  }
}

export function receiveLogin (user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

export function loginError () {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false
  }
}

// Calls the API to get a token and
// dispatches actions along the way
export function loginUser (creds, callback) {
  return (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return request('post', '/login', creds)
      .then((response) => {
          // If login was successful, set the token in local storage
        const userInfo = saveUserToken(response.body.token)
          // Dispatch the success action
        dispatch(receiveLogin(userInfo))
        callback()
      })
      .catch(err => {
        if (err.status === 403) {
          dispatch(loginError())
          dispatch(setError('Your email or password is incorrect, please try again', true))
        } else {
          dispatch(loginError())
          dispatch(setError("We're sorry, something went wrong while trying to log you in! Please try again", true))
        }
      })
  }
}
