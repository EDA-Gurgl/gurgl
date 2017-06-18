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
   return (
      <div className="itemContainer container">
        <h1> Hi </h1>
        {this.state.item &&
           <div className="item">
             <img src ={this.state.item.photo1}/>
             <img src ={this.state.item.photo2}/>
             {this.state.item.brand_id}
             {this.state.item.size_id}
             {this.state.item.condition_id}
             {this.state.item.title}
             {this.state.item.description}
            {console.log (this.state.item)}
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
