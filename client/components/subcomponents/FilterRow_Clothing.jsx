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

  toggleFilterSelected (type, filter) {
    this.props.dispatch(updateFilter(type, filter))
    this.props.stepPage(1, true) // Return back to 1st page
  }

  toggleFilterDisplay (e) {
    e.preventDefault()
    this.setState({ visible: !this.state.visible })
  }

  render () {
    return (
      <div className="filter-container">
        <a href="#"
          onClick={(e) => this.toggleFilterDisplay(e)}
          className="toggle-filter">
            {`${this.state.visible ? 'Hide filter ↑' : 'Show filter ↓'}`}
        </a>

        <div className={`filterOptions row ${this.state.visible ? '' : 'hidden'}`}>
            {this.renderFilterColumn('style', this.props.filter.style)}
            {this.renderFilterColumn('brand', this.props.filter.brand)}
            {this.renderFilterColumn('size', this.props.filter.size)}
        </div>
      </div>
    )
  }

  renderFilterColumn (type, filters) {
    if (filters) {
      return (
        <div className="filterCol four columns">
          <p>{ type.replace(/\b\w/g, l => l.toUpperCase()) }</p>
          { this.renderFilters(type, filters) }
        </div>
      )
    }
  }

  renderFilters (type, filters) {
    return filters.map((filter, idx) => {
      return (
          <button key={idx}
            onClick={() => this.toggleFilterSelected(type, filter)} className={this.props.selected[type].includes(filter) ? 'filterSelected' : ''}
            name={filter}>
              {filter}
              <div className="close-x">x</div>
          </button>
      )
    })
  }

}

export default connect()(FilterRow)
