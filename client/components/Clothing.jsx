import React from 'react'
import {connect} from 'react-redux'

import FilterRowContainer from '../containers/FilterRowContainer'
import { getAllClothing } from '../api'

export class Clothing extends React.Component {
  componentWillMount () {
    this.props.dispatch(getAllClothing())
    this.state = {
      currentPage: 0,
      itemsOnPage: 12
    }
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
            { item.description }
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

  navigateToPage (e) {
    this.setState({
      currentPage: e.target.name
    })
  }

  pagination () {
    let firstItem = this.state.currentPage * this.state.itemsOnPage
    let lastItem = firstItem + this.state.itemsOnPage
    return this.props.clothing.slice(firstItem, lastItem + 1)
  }

  displayPageNumbers () {
    let totalPages = Math.ceil(this.props.clothing.length / this.state.itemsOnPage)
    let currentPage = this.state.currentPage
    let startEdge = Math.min(6, totalPages)
    let endEdge = Math.max(0, totalPages - 6)
    let pageArray = currentPage < 4
    ? [0, startEdge]
    : currentPage > totalPages - 4
    ? [endEdge, totalPages]
    : [currentPage - 3, currentPage + 3]
    let numberArray = []
    for (let i = pageArray[0]; i <= pageArray[1]; i++) {
      numberArray.push(
        <button
          className={i === currentPage ? 'button-primary' : ''}
          name={i}
          key={i}
          onClick={(e) => this.navigateToPage(e)}>
          {i + 1}
        </button>
      )
    }
    return numberArray
  }

  render () {
    return (
    <div className="clothingContainer container">
      <FilterRowContainer />
      <div className="clothingGallery row">
        { this.displayClothing(this.pagination(this.props.clothing)) }
      </div>
      <div className="row">
        {this.displayPageNumbers()}
      </div>
    </div>
    )
  }
}

export default connect()(Clothing)
