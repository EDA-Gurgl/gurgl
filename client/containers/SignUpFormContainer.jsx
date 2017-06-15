import React from 'react'
import {connect} from 'react-redux'

import SignUpForm from '../components/SignUpForm'

import { registerUser, registerError } from '../actions/register'
import ErrorMessage from '../components/ErrorMessage'

class SignUpFormContainer extends React.Component {
  constructor(props){
    super(props)
  }


  submit=(values)=>{
    console.log(this.props);
    const {username, password, confirm} = values
    if (password !== confirm) {
      this.props.registerError('Passwords do not match!')
      return
    }
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    this.props.registerUser(creds)
    this.props.history.push(`/member/123`)
  }
  render(){
    return (
      <div className='twelve columns'>
        <SignUpForm onSubmit={this.submit} />
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (creds) => {
      return dispatch(registerUser(creds))
    },
    registerError: (message) => {
      dispatch(registerError(message))
    }
  }
}


export default connect(null, mapDispatchToProps)(SignUpFormContainer)
