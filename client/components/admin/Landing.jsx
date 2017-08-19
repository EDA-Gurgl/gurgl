import React from 'react'
import {connect} from 'react-redux'
import { PageNotFound } from '../PageNotFound'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { isAuthenticated, getUserTokenInfo } from '../../utils/auth'

const AdminLanding = (props) => {
  console.log("token info", getUserTokenInfo())
  let user = getUserTokenInfo()
  let content = []
  if (isAuthenticated() && (user.role === 's' || user.role === 'a')) {
    content.title = "Administration Landing Page"
    content.content = "Thanks for signing in. We'll load your tools here soon"
  } else {
    content.title = "Unauthorised"
    content.content = "You can't be in here"
  }
  return (
    <div className="container account">
      <h2>{content.title}</h2>
      <p className="centered">{content.content}</p>
   </div>
  )
}

export default AdminLanding
