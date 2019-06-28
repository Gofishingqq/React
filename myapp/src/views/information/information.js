import React from 'react';
import '@/views/setup/information.scss';
const Com = (props) => (
  <div className="box">
    <div className="top">
      <span onClick={() => ( props.history.go(-1))} className="left">
        <span className="iconfont icon-arrow-left"></span>
      </span>
      <span>我的资料</span>
      <span>保存</span>
    </div>
    <ul className="information-ui">
      <li>
        <p className="te">头像</p>
        <div></div>
        <span className="iconfont icon-jiantouyou"></span>
      </li>
      <li>
        <p>昵称</p>
      </li>
      <li>
        <p>性别</p>
      </li>
      <li>
        <p>手机号</p>
        <p>159****7530</p>
      </li>
      <li>
        <p>我的二维码</p>
        <span className="iconfont icon-jiantouyou"></span>
      </li>
    </ul>
  </div>
)

export default Com;