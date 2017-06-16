import {combineReducers} from 'redux'

import clothing from './clothing'
import search from './search'
import possibleFilters from './possibleFilters'
import filterSelection from './filterSelection'

export default combineReducers({
  clothing,
  search,
  possibleFilters,
  filterSelection
})
