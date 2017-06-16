import React from 'react'
import {connect} from 'react-redux'

import { updateFilter } from '../../actions/clothing'

export class FilterRow extends React.Component {
  sendFilters (type, filter) {
    this.props.dispatch(updateFilter(type, filter))
  }

  renderFilters (type, filters) {
    if (filters) {
      return filters.map((filter, idx) => {
        return (
          <button key={idx} onClick={() => this.sendFilters(type, filter)} className={this.props.selected[type].includes(filter) ? 'filterSelected' : ''} name={filter}>{filter}</button>
        )
      })
    }
  }

  render () {
    return (
      <div className="filterOptions row">
        <div className="filterCol four columns">
          Style:
          {this.renderFilters('style', this.props.filter.style)}
        </div>
        <div className="filterCol four columns">
          Brand:
          {this.renderFilters('brand', this.props.filter.brand)}
        </div>
        <div className="filterCol four columns">
          Size:
          {this.renderFilters('size', this.props.filter.size)}
        </div>
      </div>
    )
  }
}

export default connect()(FilterRow)
