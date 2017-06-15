import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import clothing from './clothing'
import search from './search'
import auth from './auth'

export default combineReducers({
  auth,
  clothing,
  search,
  form: formReducer
})
