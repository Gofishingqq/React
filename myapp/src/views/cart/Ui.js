import React from 'react';
class cart extends React.Component {
  componentDidMount () {
    // console.log(this.props)
    this.props.getyCart();
  }
  render () {
    return (
      <div className="box">
        购物车
      </div>
    )
  }
}
export default cart;