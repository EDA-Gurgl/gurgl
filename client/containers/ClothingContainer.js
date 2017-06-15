import {connect} from 'react-redux'

import Clothing from '../components/Clothing'

function searchClothing (term, items) {
  return items.filter((item) => {
    return item.description.includes(term)
  })
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
