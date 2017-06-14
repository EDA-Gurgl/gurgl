import {connect} from 'react-redux'

import Clothing from '../components/Clothing'

function mapStateToProps (state) {
  return {
    search: state.search
  }
}

export default connect(
  mapStateToProps
)(Clothing)
