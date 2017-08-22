import React, { Component } from 'react'
import { CartList } from '../components/CartList'

export class CartContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
  }

  addItem (name) {
    this.setState({
      products: [].concat(this.state.products).concat([name])
    })
  }

  render () {
    return (
      <div>
        <CartList />
      </div>
    )
  }
}
