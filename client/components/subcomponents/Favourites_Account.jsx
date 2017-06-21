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
        <h2>Your favourite items</h2>
        {
          this.props.favourites.length
          ? renderClothes(this.props.favourites, this.props.favourites)
          : <p>Go to our <a href='/#/clothing'>clothing</a> page and click the little heart icon on clothes to add them to your favourites!</p>
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    favourites: state.favourites.userFavourites
  }
}

export default connect(mapStateToProps)(Favourites)
