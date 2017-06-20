import React from 'react'
import {connect} from 'react-redux'

import { setError } from '../actions/errors'
import { getAllClothing } from '../api'

export class SingleView extends React.Component {

  componentWillMount () {
    this.props.dispatch(getAllClothing())
  }

  componentWillReceiveProps (props) {
    if (!props.item) this.props.dispatch(setError("Sorry this doesn't seem to exist", false))
  }

  render () {
    return (
      <div className="itemContainer container">
        {this.props.item
        ? <div className="item">
             <img src ={this.props.item.photo1}/>
             <img src ={this.props.item.photo2}/>
             <h1> {this.props.item.title} </h1>
             <p><label>
                Brand: {this.props.item.brand_description}
             </label></p>
             <p><label>
                Size: {this.props.item.size_description}
             </label></p>
             <p><label>
                Condition: {this.props.item.condition_description}
              </label></p>
             <p><label>
               Description: {this.props.item.description}
             </label></p>
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
