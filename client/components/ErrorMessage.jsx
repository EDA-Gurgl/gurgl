import React from 'react'
import { connect } from 'react-redux'

import { setError } from '../actions/errors'

class ErrorMessage extends React.Component {
  clearError () {
    this.props.dispatch(setError(null))
  }

  componentWillReceiveProps (props) {
    if (props.location.pathname !== this.props.location.pathname) this.props.dispatch(setError(null))
  }

  render () {
    return (
      <div className={`errorMessage ${this.props.error.message ? '' : 'hidden'}`}>
        {this.props.error.message}<br />
      {this.props.error.showClear
        ? <button onClick={() => this.clearError()}>X</button>
        : ''}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.errors
  }
}

export default connect(mapStateToProps)(ErrorMessage)
