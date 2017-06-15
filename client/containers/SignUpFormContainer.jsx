import React from 'react'
import {connect} from 'react-redux'

import SignUpForm from '../components/SignUpForm'
import {addMember} from '../actions/members'

class SignUpFormContainer extends React.Component {
  constructor(props){
    super(props)
  }


  submit=(values)=>{
    this.props.dispatch(addMember({username: values.username}))
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


export default connect()(SignUpFormContainer)
