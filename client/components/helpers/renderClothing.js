import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import store from '../../store'
import { deleteFavourite, addFavourite } from '../../actions/favourites'

export function toggleFavourite (isFavourited, id) {
  isFavourited
  ? store.dispatch(deleteFavourite(id))
  : store.dispatch(addFavourite(id))
}

export function isItemInFavourites (item, favourites, authenticated) {
  let isFavourited = (favourites.find((favourite) => {
    return favourite.id === item.id
  }))

  return authenticated
  ? <span className="fav-heart"><img src={`${isFavourited ? '/images/like-selected.svg' : '/images/like.svg'}`} className={`${isFavourited ? 'favourited' : 'disabled'}`} onClick={() => toggleFavourite(isFavourited, item.id)}/></span>
  : ''
}

export function renderItem (item, favourites, authenticated) {
  return (
    <div className="clothingItem four columns" id={`item-${item.id}`} key={item.id}>
      <Link to ={`/clothing/${item.id}`}>
        <img src={item.photo1} />
      </Link><br />

      <p className="centered">
        { isItemInFavourites(item, favourites, authenticated) }<br />
      <Link to ={`/clothing/${item.id}`}>
        { item.title }
      </Link>
     </p>
   </div>
  )
}

export function arrayTo2d (clothing) {
  return clothing
    .reduce((rows, item, idx) => {
      idx % 3 === 0
      ? rows.push([item])
      : rows[rows.length - 1].push(item)
      return rows
    }, [])
}

export function renderClothing (clothing, favourites, authenticated) {
  return arrayTo2d(clothing)
    .map((row, i) => {
      let itemArray = row.map((item, idx) => {
        return renderItem(item, favourites, authenticated)
      })

      return (
        <div className="clothingRow row" key={i}>
          { itemArray }
        </div>
      )
    })
}
