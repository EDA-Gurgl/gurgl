import React, { Component } from 'React'

export class CartList extends Component {
  render () {
    const products = this.props.products || []
    return (
      <ul className="productsList">
        {products.map((product, i) => {
          return (
            <a key={i} href="#">
              <li>
                {product.name}
              </li>
            </a>
          )
        })}
      </ul>
    )
  }
}
