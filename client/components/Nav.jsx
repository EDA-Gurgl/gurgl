import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Logout from './Logout'
import { setSearch } from '../actions/search'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  handleChange (e) {
    if (e.keyCode == 13) {
      this.submitSearch(e)
    } else {
      this.setState({
        search: e.target.value
      })
    }
  }

  submitSearch (e) {
    this.props.dispatch(setSearch(this.state.search))
    if (this.props.location.pathname !== '/clothing') this.props.history.push('/clothing')
  }

  render () {
    const {isAuthenticated, user} = this.props.auth
    return (

    <div className="nav">
      {!isAuthenticated && <Link to={'/signup'}><button>Register</button></Link>}
      {!isAuthenticated && <Link to={'/signin'}><button>Login</button></Link>}
      <div className="search">
        <input
          id="searchBar"
          name="searchBar"
          type="text"
          placeholder="Search"
          onKeyDown={(e) => this.handleChange(e)}
         />
         <button name="searchSubmit" onClick={(e) => this.submitSearch(e)}>Go</button>
      </div>
      {isAuthenticated && <Link to={`/account/${user.id}`}><button>Account</button></Link>}
      {isAuthenticated && <Logout/>}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(Nav)
