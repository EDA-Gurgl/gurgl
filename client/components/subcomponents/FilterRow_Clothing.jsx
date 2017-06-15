import React from 'react'
import {connect} from 'react-redux'

class FilterRow extends React.Component {
  render () {
    return (
      <div className="filterOptions row">
        <div className="filterCol four columns">
          filter by style
        </div>
        <div className="filterCol four columns">
          filter by size
        </div>
        <div className="filterCol four columns">
          filter by brand
        </div>
      </div>
    )
  }
}

FilterRow = connect()(FilterRow)
export default FilterRow
