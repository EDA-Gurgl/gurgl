import React from 'react'
import {connect, dispatch} from 'react-redux'
import {getAllClothing} from '../api'

const Collection = (props) =>
   (
   <div className="Collection">
      I am the Collections Library!
      {props.dispatch(getAllClothing())}
   </div>
   )

export default connect()(Collection)
