import React from 'react';
import '../sign.scss'

class Com extends React.Component {
  render () {
    return (
      <div className="r-box">
        <div className="r-return">
          <span onClick={() => ( this.props.history.go(-1))}>返回</span>
          <span onClick = {() => {this.props.history.push('/details/sign')}}>登陆</span>
        </div>
        <p className="r-title">用户注册</p>
        <form>
          <div className="r-tel">
            <span className="iconfont icon-yonghu"></span>
            <input type="text" placeholder="请输入手机号" />
          </div>
          <div className="r-code">
            <input type="text" className="r-te" placeholder="请您输入验证码" />
            <input className="r-button" type="button" value="获取验证码"/>
          </div>
          <div className="r-tel">
            <span className="iconfont icon-suo"></span>
            <input type="password" placeholder="请输入密码" />
          </div>
          <div className="r-tel">
            <span className="iconfont icon-suo"></span>
            <input type="password"  placeholder="请再次输入密码" />
          </div>
        </form>
        <div className="r-register">注册</div>
      </div>
    )
  }
}

export default Com;