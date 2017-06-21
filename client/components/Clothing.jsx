import React from 'react'
import {connect} from 'react-redux'

import renderPagination from './helpers/pagination'
import { renderClothing } from './helpers/renderClothing'
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

      { this.paginationRow() }

      { this.sliceClothesIntoPage(this.props.clothing) }

      { this.paginationRow() }

    </div>
    )
  }

  paginationRow () {
    return renderPagination({
      currentPage: this.state.currentPage,
      itemsOnPage: this.state.itemsOnPage,
      clothing: this.props.clothing,
      stepPage: this.stepPage.bind(this)
    })
  }

  sliceClothesIntoPage (clothing) {
    let firstItem = (this.state.currentPage - 1) * this.state.itemsOnPage
    let lastItem = firstItem + this.state.itemsOnPage
    return this.renderClothingRow(clothing.slice(firstItem, lastItem))
  }

  renderClothingRow (clothing) {
    if (this.props.clothingMessage) {
      return (
        <div className="centered clothingMessage">
          {this.props.clothingMessage}
        </div>
      )
    }

    if (!clothing.length) {
      return (
    <div className="centered clothingMessage">
      There doesn't appear to be anything matching your search, please try again!
    </div>
      )
    }

    return (
      <div className="clothingGallery row">
        { renderClothing(clothing, this.props.favourites.userFavourites, this.props.auth.isAuthenticated, 3) }
      </div>
    )
  }
}

export default connect()(Clothing)
