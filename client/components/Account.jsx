import React from 'react'
import {connect} from 'react-redux'

const Account = (props) => {
  console.log(props);
   return (
   <div >
      hello sklfjsadjfoasd
   </div>
   )
}

// const mapStateToProps = (state) => {
//
// }

export default connect((state) => {console.log(state); return{}})(Account)
