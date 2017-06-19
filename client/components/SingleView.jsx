import React from 'react'
import {connect} from 'react-redux'

import { getAllClothing } from '../api'

export class SingleView extends React.Component {
  componentWillMount () {
    this.props.dispatch(getAllClothing())
  }

  render() {
    console.log(this.props.item)
    return (
      <div className="itemContainer container">
        {this.props.item
        ?
           <div className="item">
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
        : "Sorry, this doesn't seem to exist"
        }
      </div>
    )
  }
}

const mapStateToProps=(state, context) => {
  let item = state.clothing.clothes.find(item => {
    return item.id == context.match.params.id
  })
  return {
    item
  }
}

export default connect(mapStateToProps)(SingleView)
