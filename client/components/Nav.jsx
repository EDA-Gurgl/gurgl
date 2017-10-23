import React from 'react'
import {connect} from 'react-redux'

import { Link } from 'react-router-dom'
import {setSearch} from '../actions/search'

import Logout from './Logout'

export class Nav extends React.Component {
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
  openNav (e) {
     e.preventDefault()
     this.setState({ navopen: !this.state.navopen })
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
        id={title}
        className={`nav-link ${this.props.location.pathname === link ? 'selected' : ''}`}>
        <Link to={link}>{title}</Link>
      </li>
    )
  }

  render () {
    const {isAuthenticated, user} = this.props.auth
    return (
      <div className="nav">
        <div className={`main-nav ${this.state.navopen ? 'mobilenav--open' : ''}`}>
           <div className="burger" onClick={(e) => this.openNav(e)}>
              <div className="burger__bar bb--1"></div>
              <div className="burger__bar bb--2"></div>
              <div className="burger__bar bb--3"></div>
              <div className="burger__bar bb--4"></div>
              <div className="burger__bar bb--5"></div>
            </div>
          <ul className="nav-items">
            {this.generateNav('/', 'Home')}
            {this.generateNav('/faq', 'FAQ')}
            {!isAuthenticated
              ? this.generateNav('/signup', 'Register')
              : this.generateNav(`/account`, 'Account')}
            {!isAuthenticated
              ? this.generateNav('/signin', 'Login')
              : <Logout history={this.props.history}/>}

            <div className="magnifier">
              <a href="#"
                onClick={(e) => this.openSearch(e)}
                id="openSearch">
                  <img id="search-icon"
                    src="images/magnifier.svg"
                    alt="search icon"/>
              </a>
            </div>
          </ul>
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
