import request from 'superagent'
import {setClothes} from './actions/clothing'

export function getAllClothing () {
  return (dispatch) => {
    request
      .get('/api/v1/clothes')
      .end((err, res) => {
        console.log({err, res})
        err
        ? console.log(err)
        : dispatch(setClothes(res.body))
      })
  }
}
