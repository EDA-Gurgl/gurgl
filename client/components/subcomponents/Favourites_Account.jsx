import React from 'react'
import {connect} from 'react-redux'

import renderPagination from '../helpers/pagination'
import { renderClothing } from '../helpers/renderClothing'
import {getUserFavourites} from '../../actions/favourites'

export class Favourites extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      itemsOnPage: 8
    }
  }

  stepPage (idx) {
    this.setState({
      currentPage: parseInt(idx)
    })
  }

  componentWillMount () {
    this.props.dispatch(getUserFavourites())
  }

  render () {
    let paginationRow = renderPagination({
      currentPage: this.state.currentPage, itemsOnPage: this.state.itemsOnPage,
      clothing: this.props.favourites,
      stepPage: this.stepPage.bind(this)
    })
    return (
      <div className="memberFavourites centered">
        <h2>Your favourite items</h2>
        {
          this.props.favourites.length
          ? <div>
            { paginationRow }
              { this.sliceClothesIntoPage(this.props.favourites, this.props.favourites, this.props.isAuthenticated) }
            { paginationRow }
          </div>
          : <p>Go to our <a href='/#/clothing'>clothing</a> page and click the little heart icon on clothes to add them to your favourites!</p>
        }
      </div>
    )
  }

  sliceClothesIntoPage (clothing) {
    let firstItem = (this.state.currentPage - 1) * this.state.itemsOnPage
    let lastItem = firstItem + this.state.itemsOnPage
    return renderClothing(clothing.slice(firstItem, lastItem), this.props.favourites, this.props.isAuthenticated, 4)
  }

}

function mapStateToProps (state) {
  return {
    favourites: state.favourites.userFavourites,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Favourites)
