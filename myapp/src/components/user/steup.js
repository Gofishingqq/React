import React from 'react';
import { List, Switch } from 'antd-mobile';
import './information.scss';
const Item = List.Item;

class ListExample extends React.Component {
  state = {
    disabled: false,
  }

  render() {
    return (
    <div className="steup-box">
      <div className="steup-top">
        <span onClick={() => ( this.props.history.go(-1))} className="left">
          <span  className="iconfont icon-arrow-left"></span>
        </span>
        <span>设置</span>
        <span></span>
      </div>
      <div className="steip-content1">
        <Item arrow="horizontal" multipleLine onClick={() => {this.props.history.push('/details/information')}}>
          个人信息 
        </Item>
        <Item arrow="horizontal" multipleLine onClick={() => {console.log(1)}}>
          收货地址 
        </Item>
        <Item arrow="horizontal" multipleLine onClick={() => {console.log(1)}}>
          申请认证 
        </Item>
      </div>
      <div className="steip-content2">
      <List.Item
          extra={<Switch
            checked={this.state.checked}
            onChange={() => {
              console.log(this.state)
              if(this.state.checked){
                console.log("未选择状态")
              }else{
                console.log('选中状态')
              }
              this.setState({
                checked: !this.state.checked,
              });
            }}
          />}
        >消息提醒</List.Item>
        <Item arrow="horizontal" multipleLine onClick={() => {console.log(1)}}>
          清除缓存 
        </Item>
        <Item arrow="horizontal" multipleLine onClick={() => {console.log(1)}}>
          帮助中心 
        </Item>
        <Item arrow="horizontal" multipleLine onClick={() => {console.log(1)}}>
          奢侈二手交易用户协议 
        </Item>
        <Item arrow="horizontal" multipleLine onClick={() => {console.log(1)}}>
          关于奢侈二手交易(V1.18) 
        </Item>
      </div>
    </div>
    );
  }
}

export default ListExample;