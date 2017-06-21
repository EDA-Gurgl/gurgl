import React from 'react'
import {connect} from 'react-redux'

import { Link } from 'react-router-dom'
import { setError } from '../actions/errors'
import { getAllClothing } from '../api'

export class SingleView extends React.Component {

  componentWillMount () {
    this.props.dispatch(getAllClothing())
  }

  componentWillReceiveProps (props) {
    console.log(props.item)
    if (!props.item) this.props.dispatch(setError("Sorry this doesn't seem to exist", false))
    if (props.item) this.props.dispatch(setError(null, false))
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
                  <h6>Brand</h6>
                  <p>{this.props.item.brand_description}</p>
                  <h6>Size</h6>
                  <p>{this.props.item.size_description}</p>
                  <h6>Condition</h6>
                  <p>{this.props.item.condition_description}</p>
                  <p>{this.props.item.description}</p>
                  <Link to ={'/clothing'}>Back to Clothing</Link>
                </div>

              </div>
            </div>

           </div>
        : ''
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
