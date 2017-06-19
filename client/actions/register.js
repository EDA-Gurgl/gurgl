import request from '../utils/api'
import { receiveLogin } from './login'
import { saveUserToken } from '../utils/auth'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export function requestRegister (creds) {
  return {
    type: REGISTER_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

export function registerError (message) {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function registerUser (creds, callback) {
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestRegister(creds))

    return request('post', '/register', creds)
      .then((response) => {
          // If login was successful, set the token in local storage
          const userInfo = saveUserToken(response.body.token)
          // Dispatch the success action
          dispatch(receiveLogin(userInfo))
          callback()
      })
      .catch(err => {
        if (err.status === 409) {
          dispatch(registerError("This username appears to be taken"))
        } else {
          dispatch(registerError("We're sorry, something went wrong while trying toregister you! Please try again"))
        }

      })
  }
}
