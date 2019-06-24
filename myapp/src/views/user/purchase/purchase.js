import React from 'react';
import './purchase.scss';

class purchase extends React.Component {
  render () {
    return (
      <div className="p-box">
        <div className="p-top">
          <span className="iconfont icon-arrow-left"></span>
          <span>我购买的</span>
        </div>
        <div className="p-content">
          <ul>
            <li>全部</li>
            <li>待付款</li>
            <li>待发货</li>
            <li>待收货</li>
          </ul>
          <div className="p-main">

          </div>
        </div>
      </div>
    )
  }
}
  
export default purchase;