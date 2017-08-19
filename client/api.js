import request from 'superagent'
import {setClothes, setFilters, fetchClothes} from './actions/clothing'
import {setError} from './actions/errors'
import {getUserFavourites} from './actions/favourites'

export function getAllClothing () {
  return (dispatch) => {
    dispatch(fetchClothes('Loading clothes...'))
    request
      .get('/api/v1/clothes')
      .end((err, res) => {
        if (err) return dispatch(setError("Something went wrong while trying to get your clothes we're sorry! Please try again", true))
        dispatch(setClothes(res.body))
        dispatch(setFilters(res.body))
        dispatch(getUserFavourites())
      })
  }
}

export function addClothingItem (item, callback) {
  console.log('action hit');
  request
    .post(`/api/v1/clothes`)
    .send(item)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      console.log("i worked!");
      callback()
    })
}
