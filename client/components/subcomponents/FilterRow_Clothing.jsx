import React from 'react'
import {connect} from 'react-redux'

import { updateFilter } from '../../actions/clothing'

export class FilterRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

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

  toggleFilter (e) {
    e.preventDefault()
    this.setState({ visible: !this.state.visible })
  }

  render () {
    return (
      <div className="filter-container">
        <a href="#" onClick={(e) => this.toggleFilter(e)} className="toggle-filter">{`${this.state.visible ? 'Hide filter ↑' : 'Show filter ↓'}`}</a>
        <div className={`filterOptions row ${this.state.visible ? '' : 'hidden'}`}>
          <div className="filterCol four columns">
            <p>Style</p>
            {this.renderFilters('style', this.props.filter.style)}
          </div>
          <div className="filterCol four columns">
            <p>Brand</p>
            {this.renderFilters('brand', this.props.filter.brand)}
          </div>
          <div className="filterCol four columns">
            <p>Size</p>
            {this.renderFilters('size', this.props.filter.size)}
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(FilterRow)
