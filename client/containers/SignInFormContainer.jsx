import React from 'react'
import {connect} from 'react-redux'

import SignInForm from '../components/SignInForm'

import { loginUser } from '../actions/login'
import ErrorMessage from '../components/ErrorMessage'


class SignInFormContainer extends React.Component {
  constructor(props){
    super(props)
  }


  submit=(values)=>{
    console.log(values);
    this.props.dispatch(loginUser(values))
    this.props.history.push(`/member/123`)
  }
  render(){
    return (
      <div className='twelve columns'>
        <SignInForm onSubmit={this.submit} />
      </div>
    )
  }
}


export default connect()(SignInFormContainer)
