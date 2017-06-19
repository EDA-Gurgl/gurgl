import request from 'superagent'
import {setClothes, setFilters, fetchClothes} from './actions/clothing'

export function getAllClothing () {
  return (dispatch) => {
    dispatch(fetchClothes('Loading clothes...'))
    request
      .get('/api/v1/clothes')
      .end((err, res) => {
        if (!err) {
          dispatch(setClothes(res.body))
          dispatch(setFilters(res.body))
        }
      })
  }
}
