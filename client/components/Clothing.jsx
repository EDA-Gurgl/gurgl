import React from 'react'
import {connect} from 'react-redux'

class Clothing extends React.Component {
  componentWillReceiveProps (np) {
    console.log(np)
  }

  render () {
    return (
    <div className="Clothing">
       { this.props.search }
    </div>
    )
  }
}

Clothing = connect()(Clothing)
export default Clothing
