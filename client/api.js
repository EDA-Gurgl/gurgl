import request from 'superagent'
import {getClothing} from './actions/clothing-action'
import {connect} from 'react-redux'


export function getAllClothing () {
  return (dispatch) => {
    console.log('doing request from api')
    request
      .get(`/api/v1/clothes`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        console.log('got response', res.body)
        dispatch(getClothing(res.body))
      })
  }
}
