import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
 
import store from '../../store'
import { deleteFavourite, addFavourite } from '../../actions/favourites'

function toggleFavourite (isFavourited, id) {
  isFavourited
  ? store.dispatch(deleteFavourite(id))
  : store.dispatch(addFavourite(id))
}

function isItemInFavourites (item, favourites) {
  let isFavourited = (favourites.find((favourite) => {
    return favourite.id === item.id
  }))
  return store.getState().auth.isAuthenticated
  ? <button className={`favouriteButton ${isFavourited ? 'favourited' : 'disabled'}`} onClick={() => toggleFavourite(isFavourited, item.id)}>★</button>
  : ''
}

export default function displayClothing (clothing, favourites) {
  let reduced = clothing
    .reduce((rows, item, idx) => {
      idx % 3 === 0
      ? rows.push([item])
      : rows[rows.length - 1].push(item)
      return rows
    }, [])

  return reduced.map((row, i) => {
    let itemArray = row.map((item, idx) => {
      return (
        <div className="clothingItem four columns" id={`item-${item.id}`} key={idx}>
          <Link to ={`/clothing/${item.id}`}>
           <img src={item.photo1} />
           </Link><br />
           <p className="centered">{ isItemInFavourites(item, favourites) }<br />
           <Link to ={`/clothing/${item.id}`}>
             { item.title }
           </Link></p>
        </div>
      )
    })
    return (
      <div className="clothingRow row" key={i}>
        { itemArray }
      </div>
    )
  })
}
