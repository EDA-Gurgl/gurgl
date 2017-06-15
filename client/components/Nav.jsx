import React from 'react'
import {connect} from 'react-redux'

import store from '../store'
import { setSearch } from '../actions/search'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  handleChange (e) {
    this.setState({
      search: e.target.value
    })
  }

  submitSearch (e) {
    this.props.dispatch(setSearch(this.state.search))
  }

  render () {
    return (
    <div className="Nav">
       <input
         name="searchBar"
         type="text"
         placeholder="Search"
         onChange={(e) => this.handleChange(e)}
        />
      <button name="searchSubmit" onClick={(e) => this.submitSearch(e)}>Go</button>
    </div>
    )
  }
}

export default connect()(Nav)
