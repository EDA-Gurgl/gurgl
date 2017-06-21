import React from 'react'
import {connect} from 'react-redux'

import SignInForm from '../components/SignInForm'

import { loginUser } from '../actions/login'

class SignInFormContainer extends React.Component {

  submit (values) {
    this.props.dispatch(loginUser(values, () => this.props.history.push('/')))
  }

  render () {
    return (
      <div className='twelve columns'>
        <SignInForm onSubmit={this.submit.bind(this)} />
      </div>
    )
  }
}

export const PureSignInFormContainer = SignInFormContainer

export default connect()(SignInFormContainer)
