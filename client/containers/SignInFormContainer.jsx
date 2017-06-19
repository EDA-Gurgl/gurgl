import React from 'react'
import {connect} from 'react-redux'

import SignInForm from '../components/SignInForm'
import ErrorMessage from '../components/ErrorMessage'

import { loginUser } from '../actions/login'

class SignInFormContainer extends React.Component {

  submit (values) {
    this.props.dispatch(loginUser(values, () => this.props.history.push('/')))
  }
  
  render () {
    return (
      <div className='twelve columns'>
        <SignInForm onSubmit={this.submit.bind(this)} />
        <ErrorMessage reducer='auth' />
      </div>
    )
  }
}

export const PureSignInFormContainer = SignInFormContainer

export default connect()(SignInFormContainer)
