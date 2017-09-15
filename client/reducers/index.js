import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import clothing from './clothing'
import search from './search'
import errors from './errors'
import favourites from './favourites'
import auth from './auth'
import possibleFilters from './possibleFilters'
import filterSelection from './filterSelection'
import cart from './cart'

export default combineReducers({
  auth,
  clothing,
  search,
  errors,
  favourites,
  possibleFilters,
  filterSelection,
  form: formReducer,
  cart
})
