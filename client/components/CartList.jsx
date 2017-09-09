import React, { Component } from 'react'
import { CartItem } from './CartItem'
import { connect } from 'react-redux'
import { deleteFromCart } from '../actions/cart'

class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [
        {
          id: 124,
          title: 'Dressed to impress',
          brand: 'Baby Factory',
          size: 'Prem',
          photo:
            'https://cdn.childrensalon.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/t/h/the-tiny-universe-boys-ivory-the-velvet-tuxedo-babygrow-72320-fb0c4ee943c42ac844df78ee1cd62ba6deb25710.jpg'
        },
        {
          id: 127,
          title: 'I spotted it first!',
          brand: 'Farmers',
          size: '9-12 months',
          photo: 'http://localhost:3000/images/dress_2.jpg'
        },
        {
          id: 126,
          title: 'Tweedy pie',
          brand: 'Baby Factory',
          size: '18-24 months',
          photo: 'http://localhost:3000/images/dress_1.jpg'
        }
      ]
    }
  }

  removeItem (e) {
    console.log(e.target.id)
    console.log(this.state)
    console.log(this.props)
    // this.props.dispatch(deleteFromCart(e.target.id))
  }

  render () {
    return (
      <div>
        <h1>My Cart</h1>
        <CartItem
          products={this.props.products}
          removeItem={this.removeItem.bind(this)}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    products: state.cart
  }
}

export default connect(mapStateToProps)(Cart)
