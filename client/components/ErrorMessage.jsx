import React from 'react'
import { connect } from 'react-redux'

class ErrorMessage extends React.Component {
  componentWillUnmount () {

  }

  render () {
    return (
      <div className="errorMessage">
        {props.message}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.errorMessage
  }
}

export default connect(mapStateToProps)(ErrorMessage)
