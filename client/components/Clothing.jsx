import React from 'react'
import {connect} from 'react-redux'

import FilterRowContainer from '../containers/FilterRowContainer'
import { getAllClothing } from '../api'

export class Clothing extends React.Component {
  componentWillMount () {
    this.props.dispatch(getAllClothing())
  }

  displayClothing (clothing) {
    if (!clothing.length) return "There doesn't appear to be anything matching your search, please try again!"
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
            <img src={item.photo1} /><br />
            <p>{ item.style_description }<br />
            { item.size_description } by { item.brand_description }</p>
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

  render () {
    return (
    <div className="clothingContainer container">
      <FilterRowContainer />
      <div className="clothingGallery row">
        { this.displayClothing(this.props.clothing) }
      </div>
    </div>
    )
  }
}

export default connect()(Clothing)
