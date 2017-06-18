import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import clothing from './clothing'
import search from './search'
import auth from './auth'
import possibleFilters from './possibleFilters'
import filterSelection from './filterSelection'

export default combineReducers({
  auth,
  clothing,
  search,
  possibleFilters,
  filterSelection,
  form: formReducer
})
