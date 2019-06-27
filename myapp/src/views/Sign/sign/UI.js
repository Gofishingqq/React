import React from 'react';
import '../sign.scss';
import axios from 'axios';
import { Toast} from 'antd-mobile';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tel:'987621',
      password:'123465'
    }
  }

  sign () {
    if(this.state.tel === '' || this.state.password === ''){
      Toast.info('账号或密码不能为空', 1.5);
    } else if (this.state.tel.length < 6 || this.state.password.length < 6) {
      Toast.info('帐号或密码输入不正确', 1.5);
    } else {
      axios.post('http://www.daxunxun.com/users/login',{
        username:this.state.tel,
        password:this.state.password
      }).then((res) => {
        if(res.data === 0){
          Toast.info('登陆失败', 1.5);
        }else if (res.data === 1) {
          Toast.info('登陆成功,三秒后跳转页面', 1.5);
          this.props.getsigntype(res.data)
          setTimeout( () => {
            this.props.history.push('/home')
          }, 3000 )
        }else if (res.data === 2) {
          Toast.info('没有该用户', 1.5);
          console.log(this)
        }else if (res.data === -1) {
          Toast.info('密码错误', 1.5);
        }
      })
    }
  }

  render () {
    return (
      <div className="s-box">
        <div className="s-top">
          <span onClick={() => ( this.props.history.go(-1))}>返回</span>
          <span onClick = {() => {this.props.history.push('/details/register')}}>注册</span>
        </div>
        <p className="s-title">用户登陆</p>
        <form>
          <div className="s-tel">
            <span className="iconfont icon-yonghu"></span>
            <input type="text" name="tel" placeholder="    手机号码或者邮箱账号" value={this.state.tel} onChange={(e) => {this.setState({tel:e.target.value})}}/>
          </div>
          <div className="s-password">
            <span className="iconfont icon-suo" ></span>
            <input type="password" name="password" placeholder="    密码" value={this.state.password} onChange={(e) => {this.setState({password:e.target.value})}}/>
          </div>
          <div className="s-type">
          <span className="iconfont icon-chakan"></span>
            <span>记住密码</span>
            <span>忘记密码</span>
          </div>
        </form>
        <div className="s-sign" onClick={() => {this.sign()}}>登 录</div>
        <p className="s-warning"></p>
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