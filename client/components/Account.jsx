import React from 'react'
import {connect} from 'react-redux'

const Account = (props) => {
  const {address, created_on, email, id, name, phone, username} = props.user

   return (
   <div >
      hello!
      <br></br>
      user details:
      Id:
      <p>{id}</p>
      address:
      <p>{address}</p>
      Signed up on:
      <p>{created_on}</p>
      email:
      <p>{email}</p>
      name:
      <p>{name}</p>
      phone:
      <p>{phone}</p>
      username:
      <p>{username}</p>
   </div>
   )
}

const mapStateToProps = (state) => {
  return {user: state.auth.user}
}

export default connect(mapStateToProps)(Account)
