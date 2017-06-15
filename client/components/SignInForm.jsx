import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {validate, renderField} from './validation-SignInForm'



let SignInForm = props => {
  const {handleSubmit, reset, submitting}=props

  return (

    <form className='form' onSubmit={handleSubmit}>
      <div>
        <label>username: </label>
        <br/>
        <Field className='input-field' name='username' component={renderField} type='text' />
      </div>
      <div>
        <label>password: </label>
        <br/>
        <Field className='input-field' name='password' component={renderField} type='text' />
      </div>

      <button className='form-button' type='submit'>Log in</button>
      <button className='form-button' type='button' disabled={submitting} onClick={reset}>Clear Values</button>
    </form>
  )
}

let createReduxForm=reduxForm({
  form:'signin',
  validate:validate
})

SignInForm=createReduxForm(SignInForm)

export default SignInForm
