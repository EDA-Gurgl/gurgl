import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import renderPagination from './helpers/pagination'
import renderClothes from './helpers/renderClothing'
import FilterRowContainer from '../containers/FilterRowContainer'
import { setSearch } from '../actions/search'
import { getAllClothing } from '../api'

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

  componentWillUnmount () {
    this.clearSearch()
  }

  pagination () {
    let firstItem = (this.state.currentPage - 1) * this.state.itemsOnPage
    let lastItem = firstItem + this.state.itemsOnPage
    return this.props.clothing.slice(firstItem, lastItem)
  }

  stepPage (pageNumber, stickyPage) {
    if (!stickyPage) window.scroll(0, 240)
    this.setState({
      currentPage: parseInt(pageNumber)
    })
  }

  clearSearch (e) {
    if (e) e.preventDefault()
    this.props.dispatch(setSearch(''))
  }

  render () {
    return (
    <div className="clothingContainer container">
      <h2>Our collection</h2>

      <div className={`row centered ${this.props.search ? '' : 'hidden'}`}>
        <p>
          Displaying results for '{this.props.search}' <br />
          <a href="#"
            onClick={(e) => this.clearSearch(e)}>
              Display all
          </a>
        </p>
      </div>

      <FilterRowContainer
        stepPage={(num, stickyPage) => this.stepPage(num, stickyPage)}
      />

    { renderPagination(this.state.currentPage, this.state.itemsOnPage, this.props.clothing, this.stepPage.bind(this)) }

      { this.renderClothingRow(this.pagination(this.props.clothing)) }

      { renderPagination(this.state.currentPage, this.state.itemsOnPage, this.props.clothing, this.stepPage.bind(this)) }

    </div>
    )
  }

  renderClothingRow (clothing) {
    if (this.props.clothingMessage) {
      return (
        <div className="centered">
          {this.props.clothingMessage}
        </div>
      )
    }

    if (!clothing.length) return "There doesn't appear to be anything matching your search, please try again!"

    return (
      <div className="clothingGallery row">
        { renderClothes(clothing, this.props.favourites.userFavourites) }
      </div>
    )
  }
}

export default connect()(Clothing)
