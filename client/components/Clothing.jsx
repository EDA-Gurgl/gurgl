import React from 'react'
import {connect} from 'react-redux'

import FilterRowContainer from '../containers/FilterRowContainer'
import { setSearch } from '../actions/search'
import { getAllClothing } from '../api'

import { Link } from 'react-router-dom'

export class Clothing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      itemsOnPage: 12
    }
  }

  componentWillMount () {
    this.props.dispatch(getAllClothing())
  }

  componentWillReceiveProps () {
    this.setState({
      currentPage: 1
    })
  }

  display (clothing) {
    if (this.props.clothingMessage) {
      return (<div className="centered">
      {this.props.clothingMessage}
    </div>)
    }
    if (!clothing.length) return "There doesn't appear to be anything matching your search, please try again!"
    return displayClothing(clothing, this.props.favourites.userFavourites)
  }

  pagination () {
    let firstItem = (this.state.currentPage - 1) * this.state.itemsOnPage
    let lastItem = firstItem + this.state.itemsOnPage
    return this.props.clothing.slice(firstItem, lastItem)
  }

  navigateToPage (e) {
    if (e.target.name === 'next' && this.state.currentPage !== this.pages()) {
      this.stepPage(this.state.currentPage + 1)
    } else if (e.target.name === 'prev' && this.state.currentPage !== 1) {
      this.stepPage(this.state.currentPage - 1)
    } else if (!isNaN(e.target.name)) {
      this.stepPage(e.target.name)
    }
  }

  stepPage (pageNumber) {
    window.scroll(0, 240)
    this.setState({
      currentPage: parseInt(pageNumber)
    })
  }

  pages () {
    return Math.ceil(this.props.clothing.length / this.state.itemsOnPage)
  }

  generateButton (type) {
    let disabled
    if (type === 'next' && this.state.currentPage === this.pages()) disabled = true
    else if (type === 'prev' && this.state.currentPage === 1) disabled = true
    else if (type === this.state.currentPage) disabled = true
    return (
      <button
        className={`
          paginationButton
          ${disabled ? 'disabled' : ''}
        `}
        name={type}
        key={type}
        onClick={(e) => this.navigateToPage(e)}>
        {type}
      </button>
    )
  }

  displayPageNumbers () {
    let totalPages = this.pages()
    let currentPage = this.state.currentPage
    let startEdge = Math.min(5, totalPages)
    let endEdge = Math.max(1, totalPages - 4)
    let pageArray = currentPage < 3
    ? [1, startEdge]
    : currentPage > totalPages - 2
    ? [endEdge, totalPages]
    : [currentPage - 2, currentPage + 2]
    let numberArray = [
      this.generateButton('prev'),
      this.generateButton('next')
    ]
    for (let i = pageArray[1]; i >= pageArray[0]; i--) {
      numberArray.splice(1, 0,
        this.generateButton(i)
      )
    }
    return numberArray
  }

  clearSearch (e) {
    if (e) e.preventDefault()
    this.props.dispatch(setSearch(''))
  }

  componentWillUnmount () {
    this.clearSearch()
  }

  render () {
    return (
    <div className="clothingContainer container">
      <div className={`row centered ${this.props.search ? '' : 'hidden'}`}>
        <p>Displaying results for '{this.props.search}' <br /><a href="#" onClick={(e) => this.clearSearch(e)}>Display all</a></p>
      </div>
      <FilterRowContainer />
        <div className="row paginationRow">
          {this.displayPageNumbers()}
        </div>
      <div className="clothingGallery row">
        { this.display(this.pagination(this.props.clothing)) }
      </div>
      <div className="row paginationRow">
        {this.displayPageNumbers()}
      </div>
    </div>
    )
  }
}

function isItemInFavourites (item, favourites) {
  if (favourites.find((favourite) => {
    return favourite.id === item.id
  })) return <button>★</button>
}

export function displayClothing (clothing, favourites) {
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
           <img src={item.photo1} /><br />
          </Link>
          { isItemInFavourites(item, favourites) }
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

export default connect()(Clothing)
