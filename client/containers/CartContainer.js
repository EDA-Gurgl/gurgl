import React, { Component } from 'react'
import { CartList } from '../components/CartList'

export class CartContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
  }

  render () {
    return (
      <div>
        <CartList />
      </div>
    )
  }
}
