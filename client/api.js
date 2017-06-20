import request from 'superagent'
import {setClothes, setFilters, fetchClothes} from './actions/clothing'
import {setError} from './actions/errors'

export function getAllClothing () {
  return (dispatch) => {
    dispatch(fetchClothes('Loading clothes...'))
    request
      .get('/api/v1/clothes')
      .end((err, res) => {
        if (err) return dispatch(setError("Something went wrong while trying to get your clothes we're sorry! Please try again", true))
        dispatch(setClothes(res.body))
        dispatch(setFilters(res.body))
      })
  }
}
