import React, { Component } from 'react'

export class CartItem extends Component {
  handleRemoveItem (e) {
    e.preventDefault()
    this.props.removeItem(e)
  }

  render () {
    const products = this.props.products || []
    return (
      <div className="cart-wrapper">
        {products.map((product, i) => {
          return (
            <div key={i} className="cart-item">
              <div className="cart-infoWrap">
                <div className="cart-item-description">
                  <img src={product.photo} className="cart-item-image" />
                  <p className="cart-item-title">{product.title}</p>
                  <p className="cart-item-size">{product.size}</p>
                </div>
              </div>

              <div className="cart-item-button">
                <a
                  href="#"
                  id={product.id}
                  className="cart-item-remove"
                  onClick={this.handleRemoveItem.bind(this)}
                >
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
