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
    console.log(this.state.products)
  }

  removeItem (id) {
    console.log(this.state.products)
    if (this.state.products.length > 0) {
      let products = [...this.state.products]
      delete products[id]
      console.log(products)
      //   this.setState({
      //     products: [...this.state.products].delete[id]
      //   })
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
