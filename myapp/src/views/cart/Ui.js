import React from 'react';
import Cart from '@/components/cart/Cart';
import './cart.scss'
class cart extends React.Component {
  componentDidMount () {
    // console.log(this.props)
    this.props.getyCart();
  }
  render () {
    return (
      <div className="cart-box">
        <Cart />
      </div>
    )
  }
}
export default cart;