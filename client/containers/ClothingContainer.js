import {connect} from 'react-redux'

import Clothing from '../components/Clothing'

function searchClothing (term, items) {
  return items.filter((item) => {
    return item.description.includes(term)
  })
}

export function filterCategory (categoryName, categoryArray, items) {
  return categoryArray.length
  ? items.filter((item) => {
    return categoryArray.includes(item[`${categoryName}_description`])
  })
  : items
}

export function filterAll (items, filter, acc) {
  let keys = Object.keys(filter)
  let round = filterCategory(keys[acc], filter[keys[acc]], items)
  acc++
  return acc >= keys.length
    ? round
    : filterAll(round, filter, acc)
}

export function mapStateToProps (state) {
  let searchResults
  if (state.search) {
    searchResults = searchClothing(state.search, state.clothing.clothes)
  }
  let clothing = searchResults || state.clothing.clothes
  return {
    search: state.search,
    clothing: filterAll(clothing, state.filterSelection, 0),
    clothingMessage: state.clothing.message
  }
}

export default connect(
  mapStateToProps
)(Clothing)
