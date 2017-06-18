import React from 'react'
import {connect} from 'react-redux'

import { getAllClothing } from '../api'

export class SingleView extends React.Component {
   constructor(props){
      super(props)
      this.state = {item: props.item}
   }

   componentWillReceiveProps(nextProps) {
   this.setState({item:nextProps.item})
}

componentWillMount () {
  this.props.dispatch(getAllClothing())
}

   render() {
      console.log(this.state.item);
   return (
      <div className="itemContainer container">
        {this.state.item &&
           <div className="item">
             <img src ={this.state.item.photo1}/>
             <img src ={this.state.item.photo2}/>
             <h1> {this.state.item.title} </h1>
             <p><label>
                Brand: {this.state.item.brand_description}
             </label></p>
             <p><label>
                Size: {this.state.item.size_description}
             </label></p>
             <p><label>
                Condition: {this.state.item.condition_description}
             </label></p>
             <p><label>
               Description: {this.state.item.description}
             </label></p>
          </div>
        }
      </div>
      )
   }
}

   const mapStateToProps=(state, nextProps) => {
      let item= state.clothing.find(item => {
         return item.id == nextProps.match.params.id
      })
      console.log({item});
   return {
      item
   }
}

export default connect(mapStateToProps)(SingleView)
