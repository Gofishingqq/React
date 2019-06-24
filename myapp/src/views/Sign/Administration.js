import React from 'react';
import './sign.scss';
class Com extends React.Component {
  render () {
    return (
      <div className="a-box">
        <div className="a-portrait"></div>
        <p className="a-nic">奢侈品二手交易</p>
        <div className="button">登录</div>
        <div className="button">注册</div>
        <div className="a-other">
          <p></p>
          <p>其他登陆方式</p>
          <p></p>
        </div>
        <div className="a-logo">
          <span className="iconfont icon-dpstipiconqq"></span>
          <span className="iconfont icon-wchart"></span>
          <span className="iconfont icon-weibo"></span>
        </div>
      </div>
    )
  }
}

export default Com;