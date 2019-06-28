import React from 'react';
import '../sign.scss'
import axios from 'axios';
import { Toast} from 'antd-mobile';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tel:"",
      Code:'',
      Codetxt: '',
      password:'',
      twopassword: ''
    }
  }

  getCode () {
    console.log(this.props)
    if ( this.state.tel.length !== 11 ) {
        Toast.info('号码格式错误，请重新输入', 1);
    } else {
      axios.get('http://www.daxunxun.com/users/sendCode', {tel:this.state.tel}).then(res => {
        if (res.data === 0) {
          Toast.info('手机号验证码获取失败', 1);
        } else if (res.data === 1) {
          Toast.info('该手机号已经注册', 1);
        } else {
          this.setState({
            code: res.data
          })
        }
      })
    }
  }

  register () {
    // console.log(this)
    if (this.state.Code !== this.state.Codetxt) {
      Toast.info('验证码错误', 1);
    } else if ( this.state.tel.length !== 11 ) {
      Toast.info('号码格式错误，请重新输入', 1);
    } else if ( this.state.password !== this.state.twopassword ) {
      Toast.info('密码输入错误', 1);
    } else {
      axios.post('http://www.daxunxun.com/users/register',{
        username:this.state.tel,
        password:this.state.password
      }).then(res => {
        // console.log(res)
        if ( res.data === 0 ) {
          Toast.info('注册失败', 1);
        } else if (res.data === 1) {
          Toast.info('注册成功,三秒后跳转页面', 1);
          this.props.changeindex(1)
          this.props.history.push('/home');
        } else if (res.data === 2) {
          Toast.info('用户名已注册', 1);
        }
      })
    }
  }

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
            <input type="text" value={this.state.tel} onChange={ (e) => {this.setState({tel:e.target.value})}} placeholder="请输入手机号" />
          </div>
          <div className="r-code">
            <input type="text" className="r-te" value={this.state.Codetxt} onChange = { (e)=> {this.setState({Codetxt: e.target.value})} } placeholder="请您输入验证码" />
            <input className="r-button" type="button" value="获取验证码" onClick={() => {this.getCode()}}/>
          </div>
          <div className="r-tel">
            <span className="iconfont icon-suo"></span>
            <input type="password" value={this.state.password} onChange = {(e) => {this.setState({password:e.target.value})}} placeholder="请输入密码" />
          </div>
          <div className="r-tel">
            <span className="iconfont icon-suo"></span>
            <input type="password" value={this.state.twopassword} onChange = {(e) => {this.setState({twopassword:e.target.value})}} placeholder="请再次输入密码" />
          </div>
        </form>
        <div className="r-register" onClick={ () => {this.register()} }>注册</div>
      </div>
    )
  }
}

export default Com;