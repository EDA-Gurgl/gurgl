import React from 'react'
import {connect} from 'react-redux'

import {setSearch} from '../actions/search'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      visible: false
    }
  }

  // Change inline styles to show or hide the search div based on this.state.visible
  // .. and switch visible state
  openSearch(e) {
    e.preventDefault()
    console.log(this.state.visible)
    if (this.state.visible) {
      searchStyle = {
        height: 0
      }
    } else {
      var searchStyle = {
        height: "auto"
      }
    }
    this.setState({ visible: !this.state.visible })
  }

  // required because referencing a style variable in render was always returning undefined
  searchStyle() {
    if (this.state.visible) {
      return {display: "inline"}
    } else {
      return {display: "none"}
    }
  }

  // submit search on enter keypress
  handleChange(e) {
    if (e.keyCode == 13) {
      this.submitSearch(e)
    } else {
      this.setState({search: e.target.value})
    }
  }

  submitSearch(e) {
    this.props.dispatch(setSearch(this.state.search))
    if (this.props.location.pathname !== '/clothing')
      this.props.history.push('/clothing')
  }

  render() {
    return (
      <div className="nav">
        <div className="main-nav">
          <ul className="nav-items">
            <li className="nav-link">
              <a href="/#/clothing">Clothing</a>
            </li>
            <li className="nav-link">
              <a href="/#/faq">FAQ</a>
            </li>
          </ul>
          <div className="magnifier">
            <a href="#" onClick={(e) => this.openSearch(e)}><img id="search-icon" src="images/magnifier.svg" alt="search icon"/></a>
          </div>
        </div>
        <div className={`search ${this.state.visible ? '' : 'hidden'}`}>
          <input className='searchBar' name="searchBar" type="text" placeholder="Search" onKeyDown={(e) => this.handleChange(e)}/>
          <button name="searchSubmit" onClick={(e) => this.submitSearch(e)}>Go</button>
        </div>
      </div>
    )
  }
}

export default connect()(Nav)
