import React from 'react'
import {connect} from 'react-redux'

import {setSearch} from '../actions/search'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      visible: false
    }
  }

  // toggle hidden class on search div, and switch visible state
  openSearch (e) {
    e.preventDefault()
    document.getElementsByClassName('search')[0].classList.toggle('hidden')
    this.setState({ visible: !this.state.visible })
  }

  // submit search on enter keypress
  handleChange (e) {
    if (e.keyCode === 13) {
      this.submitSearch(e)
    } else {
      this.setState({search: e.target.value})
    }
  }

  submitSearch (e) {
    this.props.dispatch(setSearch(this.state.search))
    if (this.props.location.pathname !== '/clothing') {
      this.props.history.push('/clothing')
    }
  }

  render () {
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
        <div className="search hidden">
          <input id="searchBar" name="searchBar" type="text" placeholder="Search" onKeyDown={(e) => this.handleChange(e)}/>
          <button name="searchSubmit" onClick={(e) => this.submitSearch(e)}>Go</button>
        </div>
      </div>
    )
  }
}

export default connect()(Nav)
