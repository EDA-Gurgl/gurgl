import request from 'superagent'
import {getClothing} from './actions/clothing-action'


export function getAllClothing () {
  return (dispatch) => {
    request
      .get(`/api/v1/clothes`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(getClothing(res.body))
      })
  }
}
