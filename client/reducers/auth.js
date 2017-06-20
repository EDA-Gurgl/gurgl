 import { LOGOUT_SUCCESS, LOGOUT_REQUEST } from '../actions/logout'
 import { REGISTER_REQUEST, REGISTER_FAILURE } from '../actions/register'
 import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login'
 import { isAuthenticated, getUserTokenInfo } from '../utils/auth'

 const initialState = {
   isFetching: false,
   isAuthenticated: isAuthenticated(),
   user: getUserTokenInfo()
 }

 export default function auth (state = initialState, action = {}) {
   switch (action.type) {
     case LOGIN_REQUEST:
       return {
         ...state,
         isFetching: true,
         isAuthenticated: false
       }
     case LOGIN_SUCCESS:
       return {
         ...state,
         isFetching: false,
         isAuthenticated: true,
         user: action.user
       }
     case LOGIN_FAILURE:
       return {
         ...state,
         isFetching: false,
         isAuthenticated: false
       }
     case LOGOUT_REQUEST:
       return {
         ...state,
         isFetching: true,
         isAuthenticated: true
       }
     case LOGOUT_SUCCESS:
       return {
         ...state,
         isFetching: false,
         isAuthenticated: false,
         user: null
       }
     case REGISTER_REQUEST:
       return {
         ...state,
         isFetching: true,
         isAuthenticated: false
       }
     case REGISTER_FAILURE:
       return {
         ...state,
         isFetching: false,
         isAuthenticated: false
       }
     default:
       return state
   }
 }
