import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Logout from './Logout'
import { setSearch } from '../actions/search'


class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      visible: false
    }
  }

  // add selected class to home nav item (necessary for clicks on logo)
  componentDidUpdate () {
    if (this.props.location.pathname === '/') {
      this.removeSelectedNav()
      let home = document.getElementById('home')
      home.classList.add('selected')
    }
  }

  // add selected class to selected nav item
  handleNavClick (e) {
    this.removeSelectedNav()
    e.currentTarget.classList.toggle('selected')
  }

  // remove selected class on all nav items
  removeSelectedNav () {
    let allLinks = document.getElementsByClassName('nav-link')
    allLinks = Array.prototype.slice.call(allLinks)
    allLinks.map((link) => link.classList.remove('selected'))
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
    console.log(this.props)
    const {isAuthenticated, user} = this.props.auth
    return (
      <div className="nav">
        <div className="main-nav">
          {!isAuthenticated && <Link to={'/signup'}><button>Register</button></Link>}
          {!isAuthenticated && <Link to={'/signin'}><button>Login</button></Link>}
          <ul className="nav-items">
            <li className="nav-link selected" id="home" onClick={(e) => this.handleNavClick(e)}>
              <a href="/#/">Home</a>
            </li>
            <li className="nav-link" onClick={(e) => this.handleNavClick(e)}>
              <a href="/#/clothing">Clothing</a>
            </li>
            <li className="nav-link" onClick={(e) => this.handleNavClick(e)}>
              <a href="/#/faq">FAQ</a>
            </li>
          </ul>
          {isAuthenticated && <Link to={`/account/${user.id}`}><button>Account</button></Link>}
          {isAuthenticated && <Logout/>}
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

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(Nav)
