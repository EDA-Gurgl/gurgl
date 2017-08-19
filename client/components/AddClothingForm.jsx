import React from 'react'
import {connect} from 'react-redux'

import { getAllClothing } from '../api'


class AddClothingForm extends React.Component {

  componentDidMount () {
    this.props.dispatch(getAllClothing())
  }


  render () {
    return (
    <div className="addClothingForm container">
      <h2>Here is the form</h2>

    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {clothing: state.clothing}
}

export default connect(mapStateToProps)(AddClothingForm)
