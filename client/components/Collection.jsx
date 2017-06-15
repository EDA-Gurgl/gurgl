import React from 'react'
import {connect, dispatch} from 'react-redux'
import {getAllClothing} from '../api'

const Collection = (props) =>
   (
   <div className="Collection">
      I am the Collections Library! ya
      <button onClick={() => props.dispatch(getAllClothing())}>CLICK MEEEEEEEEEE</button>
   </div>
   )

function mapStateToProps(state) {
  return {
    clothing: state.clothing
  }
}

export default connect(mapStateToProps)(Collection)
