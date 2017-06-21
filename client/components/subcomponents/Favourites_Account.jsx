import React from 'react'
import {connect} from 'react-redux'

import renderClothes from '../helpers/renderClothing'
import {getUserFavourites} from '../../actions/favourites'

export class Favourites extends React.Component {
  componentWillMount () {
    this.props.dispatch(getUserFavourites())
  }

  render () {
    return (
      <div className="memberFavourites centered">
        <h2>Favourited:</h2>
        {
          this.props.favourites.length
          ? renderClothes(this.props.favourites, this.props.favourites, this.props.isAuthenticated)
          : "Go to our clothing page and click the little star icon on clothes to add them to your favourites!"
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    favourites: state.favourites.userFavourites,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Favourites)
