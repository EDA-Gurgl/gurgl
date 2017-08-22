import React, { Component } from 'react'
import { CartList } from '../components/CartList'

export class CartContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
  }

  addItem (id, name) {
    let product = { id, name }
    this.setState({
      products: [].concat(this.state.products).concat([product])
    })
  }

  removeItem (id) {
    // delete item based on index of array
    if (this.state.products.length > 0) {
      let products = [...this.state.products]
      products.splice(id, 1)
      this.setState({
        products
      })
    }
  }

  render () {
    return (
      <div>
        <CartList products={this.state.products} />
      </div>
    )
  }
}
