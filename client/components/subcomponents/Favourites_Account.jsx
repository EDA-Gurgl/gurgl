import React from 'react'
import {connect} from 'react-redux'
import {displayClothing} from '../Clothing'
import {getUserFavourites} from '../../actions/favourites'

export class Favourites extends React.Component {
  componentWillMount () {
    this.props.dispatch(getUserFavourites())
  }

  render () {
    return (
      <div className="memberFavourites">
        <h2>Favourited:</h2>
        {displayClothing(this.props.favourites, this.props.favourites)}
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
