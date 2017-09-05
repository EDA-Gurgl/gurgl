import React, { Component } from 'react'

export class CartItem extends Component {
  render () {
    const products = this.props.products || []

    return (
      <div className="cart-wrapper">
        {products.map((product, i) => {
          return (
            <div className="cart-item">
              <div className="cart-image">
                <img src={product.photo} className="cart-item-image" />
              </div>

              <div className="cart-title">{product.title}</div>

              <div className="cart-size">{product.size}</div>

              <div className="cart-button">
                <a href="#" className="cart-remove">
                  x
                </a>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
