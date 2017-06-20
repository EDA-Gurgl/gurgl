import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {validate, renderField} from './validation-SignUpForm'

let SignUpForm = props => {
  const {handleSubmit, reset, submitting} = props

  return (
    <div className="container">
      <h2>Get bub some new duds!</h2>
      <form className="register" onSubmit={handleSubmit}>
        <div className="three columns">&nbsp;</div>
        <div className="three columns centered">
          <div>
            <label>Your desired username</label>
            <Field className='input-field' name='username' component={renderField} type='text' />
          </div>
          <div>
            <label>Password</label>
            <Field className='input-field' name='password' component={renderField} type='password' />
          </div>
          <div>
            <label>Confirm password</label>
            <Field className='input-field' name='confirm' component={renderField} type='password' />
          </div>
          <div>
            <label>Your name</label>
            <Field className='input-field' name='name' component={renderField} type='text' />
          </div>
        </div>
        <div className="three columns centered">
          <div>
            <label>Your phone number</label>
            <Field className='input-field' name='phone' component={renderField} type='text' />
          </div>
          <div>
            <label>Your address</label>
            <Field className='input-field' name='address' component={renderField} type='text' />
          </div>
          <div>
            <label>Your email</label>
            <Field className='input-field' name='email' component={renderField} type='email' />
          </div>
          <button className='form-button button button-primary' type='submit'>Add User</button><br />
          <button className='form-button button clear' type='button' disabled={submitting} onClick={reset}>Clear</button>
        </div>
      </form>
      <div className="twelve columns">
        <img id="register-img" src="/images/cute-bird.png" alt="cute tree" />
      </div>
    </div>
  )
}

let createReduxForm = reduxForm({
  form: 'signup',
  validate: validate
})

SignUpForm = createReduxForm(SignUpForm)

export default SignUpForm
