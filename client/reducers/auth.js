 import { LOGOUT_SUCCESS, LOGOUT_REQUEST } from '../actions/logout'
 import { REGISTER_REQUEST, REGISTER_FAILURE } from '../actions/register'
 import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login'
 import { isAuthenticated, getUserTokenInfo } from '../utils/auth'

 const initialState = {
   isFetching: false,
   isAuthenticated: isAuthenticated(),
   user: getUserTokenInfo(),
   errorMessage: ''
 }

 export default function auth (state = initialState, action = {}) {
   switch (action.type) {
     case LOGIN_REQUEST:
       return {
         ...state,
         isFetching: true,
         isAuthenticated: false,
         errorMessage: ''
       }
     case LOGIN_SUCCESS:
       return {
         ...state,
         isFetching: false,
         isAuthenticated: true,
         user: action.user,
         errorMessage: ''
       }
     case LOGIN_FAILURE:
       return {
         ...state,
         isFetching: false,
         isAuthenticated: false,
         errorMessage: action.message
       }
     case LOGOUT_REQUEST:
       return {
         ...state,
         isFetching: true,
         isAuthenticated: true,
         errorMessage: ''
       }
     case LOGOUT_SUCCESS:
       return {
         ...state,
         isFetching: false,
         isAuthenticated: false,
         user: null,
         errorMessage: ''
       }
     case REGISTER_REQUEST:
       return {
         ...state,
         isFetching: true,
         isAuthenticated: false,
         errorMessage: ''
       }
     case REGISTER_FAILURE:
       return {
         ...state,
         isFetching: false,
         isAuthenticated: false,
         errorMessage: action.message
       }
     default:
       return state
   }
 }
