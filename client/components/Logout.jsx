import React from 'react'
import {connect} from 'react-redux'

import {logoutUser} from '../actions/logout'

const Logout = (props) => {
  return (
    <li className="nav-link logout" onClick={() => props.logoutUser(() => {
      if (window.location.hash != '#/') props.history.push('/')
    })
  }>Logout</li>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (callback) => {
      dispatch(logoutUser(callback))
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
