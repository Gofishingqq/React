import React from 'react';
import './sign.scss';

class Com extends React.Component {
  render () {
    return (
      <div className="s-box">
        <div className="s-top">
          <span>返回</span>
          <span>注册</span>
        </div>
        <p className="s-title">用户登陆</p>
        <form>
          <div className="s-tel">
            <span className="iconfont icon-yonghu"></span>
            <input type="text" name="tel" placeholder="    手机号码或者邮箱账号"/>
          </div>
          <div className="s-password">
            <span className="iconfont icon-suo" ></span>
            <input type="password" name="password" placeholder="    密码"/>
          </div>
          <div className="s-type">
          <span className="iconfont icon-chakan"></span>
            <span>记住密码</span>
            <span>忘记密码</span>
          </div>
        </form>
        <div className="s-sign">登 录</div>
        <p className="s-warning">用户名或密码错误，请重试</p>
        <div className="s-other">
          <p></p>
          <p>其他登陆方式</p>
          <p></p>
        </div>
        <div className="s-logo">
          <span className="iconfont icon-dpstipiconqq"></span>
          <span className="iconfont icon-wchart"></span>
          <span className="iconfont icon-weibo"></span>
        </div>
      </div>
    )
  }
}
export default Com;