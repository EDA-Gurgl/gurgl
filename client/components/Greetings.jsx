import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {getGreetings} from '../actions/greetings'

const renderGreeting = (greeting, key) => (
  <h1 key={key}>{greeting.text}</h1>
)

const Greetings = ({greetings, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getGreetings())}>Show Greetings</button>
    {greetings.map(renderGreeting)}
  </div>
)

const mapStateToProps = (state) => {
  return {greetings: state.greetings}
}

Greetings.propTypes = {
  greetings: PropTypes.array,
  dispatch: PropTypes.func
}

export default connect(mapStateToProps)(Greetings)
