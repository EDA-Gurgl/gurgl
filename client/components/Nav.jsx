import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
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
    this.setState({ visible: !this.state.visible })
  }

  // submit search on enter keypress
  handleChange (e) {
    this.setState({search: e.target.value})
  }

  submitSearch (e) {
    e.preventDefault()
    this.props.dispatch(setSearch(this.state.search))
    if (this.props.location.pathname !== '/clothing') {
      this.props.history.push('/clothing')
    }
    this.setState({
      search: '',
      visible: false
    })
  }

  generateNav (link, title) {
    return (
      <li
        className={`nav-link ${this.props.location.pathname === link ? 'selected' : ''}`}>
        <Link to={link}>{title}</Link>
      </li>
    )
  }

  render () {
    return (
      <div className="nav">
        <div className="main-nav">
          <ul className="nav-items">
            {this.generateNav('/', 'Home')}
            {this.generateNav('/clothing', 'Clothing')}
            {this.generateNav('/faq', 'FAQ')}
          </ul>
          <div className="magnifier">
            <a href="#" onClick={(e) => this.openSearch(e)}><img id="search-icon" src="images/magnifier.svg" alt="search icon"/></a>
          </div>
        </div>
        <div className={`search ${this.state.visible ? '' : 'hidden'}`}>
          <form method="get" onSubmit={(e) => this.submitSearch(e)}>
          <input className='searchBar' name="searchBar" type="text" placeholder="Search" onChange={(e) => this.handleChange(e)} value={this.state.search}/>
          <button type="submit" name="searchSubmit">Go</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(Nav)
