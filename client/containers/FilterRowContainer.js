import {connect} from 'react-redux'

import FilterRow from '../components/subcomponents/FilterRow_Clothing'

export function mapStateToProps (state) {
  return {
    filter: state.possibleFilters,
    selected: state.filterSelection
  }
}

export default connect(
  mapStateToProps
)(FilterRow)
