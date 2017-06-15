import {combineReducers} from 'redux'

import clothing from './clothing-reducer'
import search from './search'

export default combineReducers({
  clothing,
  search
})
