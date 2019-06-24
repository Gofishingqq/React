import React from 'react';
import './user.scss'
import purchase from './purchase/purchase';
import { Switch, Route, Link } from 'react-router-dom';

class user extends React.Component {
  componentDidMount () {
    // console.log(this.props)
    this.props.getyUser();
  }
  render () {
    return (
      <div className="box">
        <div className="u-box">
          <div className = "u-top">
            <div className="u-set">
              <span className="iconfont icon-shezhi"></span>
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
              <span>查看更多订单</span>
            </div>
            <ul>
              <Switch>
                <Route path = "/user/purchase" component = { purchase }/>
              </Switch>
              <Link className="u-li" to="/user/purchase">
                <div className="payment"></div>
                <p>待支付</p>
              </Link>
              <Link className="u-li" to="/user/purchase">
                <div className="payment"></div>
                <p>待支付</p>
              </Link>
              <Link className="u-li" to="/user/purchase">
                <div className="payment"></div>
                <p>待支付</p>
              </Link>
              <Link className="u-li" to="/user/purchase">
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