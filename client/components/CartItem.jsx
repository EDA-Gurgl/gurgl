import React, { Component } from 'react'

export class CartItem extends Component {
  render () {
    const products = this.props.products || []

    return (
      <div className="cart-wrapper">
        {products.map((product, i) => {
          return (
            <div className="cart-item">
              <div className="cart-infoWrap">
                <div className="cart-item-description">
                  <img src={product.photo} className="cart-item-image" />
                  <p className="cart-item-title">{product.title}</p>
                  <p className="cart-item-size">{product.size}</p>
                </div>
              </div>

              <div className="cart-item-button">
                <a href="#" className="cart-item-remove">
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
