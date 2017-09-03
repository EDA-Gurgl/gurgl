import React, { Component } from 'react'

export class CartItem extends Component {
  render () {
    const products = this.props.products || []

    return (
      <div>
        {products.map((product, i) => {
          return (
            <div className="cart-item">
              <div className="cart-image">
                <img src={product.photo} className="cart-item-image" />
              </div>

              <div className="cart-title">
                <h4>{product.title}</h4>
              </div>

              <div className="cart-size">
                <h4>{product.size}</h4>
              </div>

              <div className="cart-button">
                <h4>X</h4>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
