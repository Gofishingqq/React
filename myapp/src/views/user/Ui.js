import React from 'react';
import './user.scss';
import {  Link } from 'react-router-dom';

class user extends React.Component {
  componentDidMount () {
    // this.props.getyUser();
  }

  render () {
    console.log(this.props)
    return (
      <div className="box">
        <div className="u-box">
          <div className = "u-top">
            <div className="u-set">
              <Link className="shezhi" to='/details/steup'>
              <span className="iconfont icon-shezhi"></span>
              </Link>
              <span className="iconfont icon-xinxiduanxinxiaoxitixingyoujiansixinyouxiang"></span>
            </div>
            <div className="u-head">
              <div className="u-img"></div>
              <p className="u-name">未来</p>
              <div className="u-money">
                <ul>
                  <li>
                    <p>0</p>
                    <p>钱包</p>
                  </li>
                  <li>
                    <p>0</p>
                    <p>钱包</p>
                  </li>
                  <li>
                    <p>0</p>
                    <p>钱包</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="u-order">
            <div className="u-my">
              <span>我的订单</span>
              <span onClick={() => ( this.props.history.push('/details/purchase'))} className="left">
                <span>查看更多订单</span>
              </span>
            </div>
            <ul>
              <Link className="u-li" onClick={() => {this.props.getindex(0)} } to="/details/purchase">
                <div className="payment"></div>
                <p>待支付</p>
              </Link>
              <Link className="u-li" onClick={() => {this.props.getindex(1)}} to="/details/purchase">
                <div className="payment"></div>
                <p>待支付</p>
              </Link>
              <Link className="u-li" onClick={() => {this.props.getindex(2)}} to="/details/purchase">
                <div className="payment"></div>
                <p>待支付</p>
              </Link>
              <Link className="u-li" onClick={() => {this.props.getindex(3)}} to="/details/purchase">
                <div className="payment"></div>
                <p>待支付</p>
              </Link>
            </ul>
          </div>
          <div className="u-other">
          <ul>
              <li>
                <div></div>
                <p>我的鉴定</p>
              </li>
              <li>
                <div></div>
                <p>我的鉴定</p>
              </li>
              <li>
                <div></div>
                <p>我的鉴定</p>
              </li>
            </ul>
            <ul>
              <li>
                <div></div>
                <p>我的鉴定</p>
              </li>
              <li>
                <div></div>
                <p>我的鉴定</p>
              </li>
              <li>
                <div></div>
                <p>我的鉴定</p>
              </li>
            </ul>
          </div>
          <p className="tel">客服电话：400-086-5285</p>
        </div>
      </div>
    )
  }
}
export default user;