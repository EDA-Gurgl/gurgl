import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { isItemInFavourites } from './helpers/renderClothing'
import { setError } from '../actions/errors'
import { getAllClothing } from '../api'

export class SingleView extends React.Component {

  componentWillMount () {
    this.props.dispatch(getAllClothing())
  }

  componentWillReceiveProps (props) {
    props.item
    ? this.props.dispatch(setError(null, false))
    : this.props.dispatch(setError("Sorry this doesn't seem to exist", false))
  }

  isItemInFavourites () {
    return this.props.favourites.find((favourite) => {
      return favourite.id === item.id
    })
  }

  render () {
    return (
      <div className="itemContainer container">
        {this.props.item
        ? <div className="item row">

            <div className="five columns main-image">
              <img src={this.props.item.photo1}/>
            </div>

            <div className="seven columns">
              <h2>{this.props.item.title}
                { isItemInFavourites(this.props.item, this.props.favourites, this.props.isAuthenticated) }</h2>

              <div className="row">

                <div className="four columns secondary-image">
                  <img src={this.props.item.photo2}/>
                </div>

                <div className="eight columns">
                  <h6>Brand</h6>
                  <p>{this.props.item.brand_description}</p>
                  <h6>Size</h6>
                  <p>{this.props.item.size_description}</p>
                  <h6>Condition</h6>
                  <p>{this.props.item.condition_description}</p>
                  <p>{this.props.item.description}</p>
                  <Link to ={'/clothing'}>Back to Clothing</Link>
                </div>

              </div>
            </div>

           </div>
        :  <div className="centered">
              <Link to="/clothing">Back to clothing</Link><br />
              <Link to="/">Back to home</Link>
           </div>
        }
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
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(SingleView)
