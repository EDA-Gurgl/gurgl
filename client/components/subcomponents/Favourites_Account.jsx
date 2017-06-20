import React from 'react'
import {connect} from 'react-redux'

export class Favourites extends React.Component {
  componentWillMount () {
    this.props.dispatch(getUserFavourites())
  }

  render () {
    return (
      <div className="memberFavourites row">
        <h2>Favourited:</h2>
        {renderFavourites(this.props.favourites)}
      </div>
    )
  }
}

function renderFavourites(favourites) {
  return "rendering"
}

function mapStateToProps (state) {
  return {
    favourites: state.favourites
  }
}

export default connect()(Favourites)
