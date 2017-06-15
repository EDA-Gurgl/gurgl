import React from 'react'
import {connect} from 'react-redux'

import { getAllClothing } from '../api'

class Clothing extends React.Component {
  componentWillMount () {
    this.props.dispatch(getAllClothing())
  }

  displayClothing(clothing) {
    return clothing.map((item, idx) => {
      return (
        <div className="item four columns" key={idx}>
          <img src={item.photo1} /><br />
          {item.description}
        </div>
      )
    })
  }

  render () {
    return (
    <div className="clothingContainer container">
      <div className="clothingGallery row">
        { this.displayClothing(this.props.clothing) }
      </div>
    </div>
    )
  }
}

Clothing = connect()(Clothing)
export default Clothing
