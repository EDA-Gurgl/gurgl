import React from 'react'
import {connect} from 'react-redux'

import { Link } from 'react-router-dom'
import {setSearch} from '../actions/search'

import Logout from './Logout'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      visible: false
    }
  }

  openSearch (e) {
    e.preventDefault()
    this.setState({ visible: !this.state.visible })
  }

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
    const {isAuthenticated, user} = this.props.auth
    return (
      <div className="nav">
        <div className="main-nav">
          <ul className="nav-items">
            {this.generateNav('/', 'Home')}
            {this.generateNav('/clothing', 'Clothing')}
            {this.generateNav('/faq', 'FAQ')}
            {!isAuthenticated && this.generateNav('/signup', 'Register')}
            {!isAuthenticated && this.generateNav('/signin', 'Login')}
            {isAuthenticated && this.generateNav(`/account/${user.id}`, 'Account')}
            {isAuthenticated && <Logout history={this.props.history}/>}
          </ul>
          <div className="magnifier">
            <a href="#" onClick={(e) => this.openSearch(e)} id="openSearch"><img id="search-icon" src="images/magnifier.svg" alt="search icon"/></a>
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

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(Nav)
