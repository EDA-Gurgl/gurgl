import React from 'react'

import {connect} from 'react-redux'

const Account = (props) => {
  const {address, createdOn, email, id, name, phone, username} = props.user

  return (
   <div className="container account">
     <h2>Your account details</h2>
     <div className="three columns">&nbsp;</div>
     <div className="three columns">
       <h5>Username</h5>
       <p>{username}</p>
       <h5>Name</h5>
       <p>{name}</p>
       <h5>Email</h5>
       <p>{email}</p>
       <h5>Address</h5>
       <p>{address}</p>
     </div>
     <div className="three columns">
       <h5>Phone</h5>
       <p>{phone}</p>
       <h5>Member No.</h5>
       <p>{id}</p>
       <h5>Join date</h5>
       <p>{createdOn}</p>

     </div>
   </div>
  )
}

const mapStateToProps = (state) => {
  return {user: state.auth.user}
}

export default connect(mapStateToProps)(Account)
