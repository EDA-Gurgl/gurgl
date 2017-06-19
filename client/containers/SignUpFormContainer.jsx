import React from 'react'
import {connect} from 'react-redux'

import SignUpForm from '../components/SignUpForm'

import { registerUser, registerError } from '../actions/register'

class SignUpFormContainer extends React.Component {

  submit (values) {
    const {username, password, confirm, name, phone, address, email} = values
    if (password !== confirm) {
      this.props.registerError('Passwords do not match!')
      return
    }
    const creds = {
      username: username.trim(),
      password: password.trim(),
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
      email: email.trim()
    }
    this.props.registerUser(creds, () => this.props.history.push('/'))

  }
  render () {
    return (
      <div className='twelve columns form'>
        <SignUpForm onSubmit={this.submit.bind(this)} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (creds, callback) => {
      return dispatch(registerUser(creds, callback))
    },
    registerError: (message) => {
      dispatch(registerError(message))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignUpFormContainer)
