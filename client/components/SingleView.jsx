import React from 'react'
import {connect} from 'react-redux'

import { getAllClothing } from '../api'

export class SingleView extends React.Component {

  componentWillMount () {
    this.props.dispatch(getAllClothing())
  }

  render () {
    return (
      <div className="itemContainer container">
        {this.props.item
        ? <div className="item row">

            <div className="five columns main-image">
              <img src={this.props.item.photo1}/>
            </div>

            <div className="seven columns">
              <h2>{this.props.item.title}</h2>

              <div className="row">

                <div className="four columns secondary-image">
                  <img src={this.props.item.photo2}/>
                </div>

                <div className="eight columns">
                  <p>{this.props.item.description}</p>
                  <h6>Brand</h6>
                  <p>{this.props.item.brand_description}</p>
                  <h6>Size</h6>
                  <p>{this.props.item.size_description}</p>
                  <h6>Condition</h6>
                  <p>{this.props.item.condition_description}</p>
                </div>

              </div>
            </div>

           </div>
        : "Sorry, this doesn't seem to exist"
        }
      </div>
    )
  }
}

const mapStateToProps = (state, context) => {
  let item = state.clothing.clothes.find(item => {
    return parseInt(item.id) === parseInt(context.match.params.id)
  })
  return {
    item
  }
}

export default connect(mapStateToProps)(SingleView)
