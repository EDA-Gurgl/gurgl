import React from 'react'
import {connect} from 'react-redux'

import store from '../store'
import { search } from '../actions/search'

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
    this.props.dispatch(search(this.state.search))
  }

  render () {
    return (
    <div className="Nav">
       <input
         type="text"
         placeholder="Search"
         onChange={(e) => this.handleChange(e)}
        />
       <button onClick={(e) => this.submitSearch(e)}>Go</button>
    </div>
    )
  }
}

export default connect()(Nav)
