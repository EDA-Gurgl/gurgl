import React from 'react'
import {connect} from 'react-redux'

import {logoutUser} from '../actions/logout'

const Logout = (props) => {
  return (
    <button onClick={() => props.logoutUser(() => {
      if (window.location.hash !== '#/') props.history.push('/')
    })
  }>
      Logout
    </button>
  )
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    logoutUser: (callback) => {
      dispatch(logoutUser(callback))
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
