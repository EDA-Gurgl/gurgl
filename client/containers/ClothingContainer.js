import {connect} from 'react-redux'

import Clothing from '../components/Clothing'

function searchClothing (term, items) {
  return items.filter((item) => {
    return item.description.includes(term)
  })
}

function filterOptions (items) {
  let filterObject = {
    size: [],
    style: [],
    brand: []
  }
  items.forEach((item) => {
    if (!filterObject.size.includes(item.size_id)) filterObject.size.push(item.size_id)
    if (!filterObject.style.includes(item.style_id)) filterObject.style.push(item.style_id)
    if (!filterObject.brand.includes(item.brand_id)) filterObject.brand.push(item.brand_id)
  })
  return filterObject
}

var filterTerms = {
  size: [],
  style: [],
  brand: []
}

export function mapStateToProps (state) {
  let searchResults
  if (state.search) searchResults = searchClothing(state.search, state.clothing)
  return {
    search: state.search,
    clothing: searchResults || state.clothing
  }
}

export default connect(
  mapStateToProps
)(Clothing)
