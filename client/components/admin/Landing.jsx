import React from 'react'
import {connect} from 'react-redux'
import { PageNotFound } from '../PageNotFound'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { isAuthenticated, getUserTokenInfo } from '../../utils/auth'

const AdminLanding = (props) => {
  let content = ""
  if (isAuthenticated()) {
    content = "authed"
  } else {
    content = "not allowed"
  }
  return (
    <div>
      {content}
   </div>
  )
}

export default AdminLanding
