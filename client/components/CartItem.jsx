import React, { Component } from 'react'

export class CartItem extends Component {
  constructor (props) {
    super(props)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
  }
  handleRemoveItem (e) {
    e.preventDefault()
    console.log(e.target.id)
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
                  onClick={this.handleRemoveItem}
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
