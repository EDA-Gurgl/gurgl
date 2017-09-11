import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import shuffle from 'array-shuffle'

import { isItemInFavourites, renderClothing } from './helpers/renderClothing'
import { setError } from '../actions/errors'
import { addToCart } from '../actions/cart'
import { getAllClothing } from '../api'
import { CheckoutButton } from './helpers/cartButtons'

export class SingleView extends React.Component {
  componentWillMount () {
    this.props.dispatch(getAllClothing())
  }

  componentWillReceiveProps (props) {
    if (props.clothingMessage) return
    props.item
      ? this.props.dispatch(setError(null, false))
      : this.props.dispatch(setError("Sorry this doesn't seem to exist", false))
  }

  isItemInFavourites () {
    return this.props.favourites.find(favourite => {
      return favourite.id === item.id
    })
  }

  getRandomFavourites () {
    let faves = shuffle(
      this.props.favourites.filter(favourite => {
        return favourite.id != this.props.item.id
      })
    )
    return faves.slice(0, 4)
  }

  addItem (props) {
    let product = {
      id: props.id,
      title: props.title,
      brand: props.brand_description,
      size: props.size_description,
      photo: props.photo1
    }
    this.props.dispatch(addToCart(product))
  }

  renderItem (faves) {
    return (
      <div>
        <div className="item row">
          <div className="five columns main-image">
            <img src={this.props.item.photo1} />
          </div>

          <div className="seven columns">
            <h2>
              {this.props.item.title}
              {isItemInFavourites(
                this.props.item,
                this.props.favourites,
                this.props.isAuthenticated
              )}
            </h2>

            <div className="row">
              <div className="four columns secondary-image">
                <img src={this.props.item.photo2} />
              </div>

              <div className="eight columns">
                <h6>Brand</h6>
                <p>{this.props.item.brand_description}</p>
                <h6>Size</h6>
                <p>{this.props.item.size_description}</p>
                <h6>Condition</h6>
                <p>{this.props.item.condition_description}</p>
                <p>{this.props.item.description}</p>
                <p>
                  <button
                    className="cart-add-button"
                    onClick={() => {
                      this.addItem(this.props.item)
                    }}
                  >
                    ADD TO CART
                  </button>
                </p>
                <CheckoutButton cartCount={this.props.cart.length} />

                <Link to={'/clothing'}>Back to Clothing</Link>
              </div>
            </div>
          </div>
        </div>
        {this.renderFavouritesRow(faves)}
      </div>
    )
  }

  renderFavouritesRow (faves) {
    return faves.length ? (
      <span>
        <h4 className="itemsFavourited">Items you've favourited</h4>
        {renderClothing(
          faves,
          this.props.favourites,
          this.props.isAuthenticated,
          4
        )}
      </span>
    ) : (
      ''
    )
  }

  renderMessage () {
    return this.props.clothingMessage ? (
      <h5 className="centered">Loading item...</h5>
    ) : (
      <div className="centered">
        <Link to="/clothing">Back to clothing</Link>
        <br />
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  render () {
    let faves = this.getRandomFavourites()
    return (
      <div className="itemContainer container">
        {this.props.item ? this.renderItem(faves) : this.renderMessage()}
      </div>
    )
  }
}

const mapStateToProps = (state, context) => {
  let item = state.clothing.clothes.find(item => {
    return parseInt(item.id) === parseInt(context.match.params.id)
  })
  return {
    item,
    favourites: state.favourites.userFavourites,
    isAuthenticated: state.auth.isAuthenticated,
    clothingMessage: state.clothing.message,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(SingleView)
