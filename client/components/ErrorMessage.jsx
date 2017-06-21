import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
      <div className={`errorMessage container ${this.props.error.message ? '' : 'hidden'}`}>
        <span className="errorText">
          {this.props.error.message}
          {this.props.error.showClear
          ? <button onClick={() => this.clearError()}>X</button>
          : ''}
        </span>
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
