import React from 'react'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }

  return errors
}

const renderField = ({input, label, type, meta: {touched, error}}) => {
  return (
    <div>
      <label>{label}</label>
      <div id="required">
        {touched && ((error && <span>{error}</span>))}
        <input {...input} placeholder={label} type={type}/>
      </div>
    </div>
  )
}

module.exports = {
  validate,
  renderField
}
