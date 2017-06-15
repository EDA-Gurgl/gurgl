import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {validate, renderField} from './validation-SignUpForm'


let SignUpForm = props => {
  const {handleSubmit, reset, submitting}=props

  return (

    <form className='form' onSubmit={handleSubmit}>
      <div>
        <label>Your desired username: </label>
        <br/>
        <Field className='input-field' name='username' component={renderField} type='text' />
      </div>
      <div>
        <label>Password: </label>
        <br/>
        <Field className='input-field' name='password' component={renderField} type='text' />
      </div>
      <div>
        <label>Confirm password: </label>
        <br/>
        <Field className='input-field' name='confirm' component={renderField} type='text' />
      </div>
      <div>
        <label>Your name: </label>
        <br/>
        <Field className='input-field' name='name' component={renderField} type='text' />
      </div>
      <div>
        <label>Your phone number: </label>
        <br/>
        <Field className='input-field' name='phoneNumber' component={renderField} type='text' />
      </div>
      <div>
        <label>Your address: </label>
        <br/>
        <Field className='input-field' name='address' component={renderField} type='text' />
      </div>
      <div>
        <label>Your email: </label>
        <br/>
        <Field className='input-field' name='email' component={renderField} type='text' />
      </div>
      <button className='form-button' type='submit'>Add User</button>
      <button className='form-button' type='button' disabled={submitting} onClick={reset}>Clear Values</button>
    </form>
  )
}

let createReduxForm=reduxForm({
  form:'signup',
  validate:validate
})

SignUpForm=createReduxForm(SignUpForm)

export default SignUpForm
