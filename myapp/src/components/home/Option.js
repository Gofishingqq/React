import React from 'react';
import '../homeSass/OPtion.scss'
const Option = () => (
  <div className = "option">
   <ul className = "option-top">
     <li><b>鉴定</b><span>|</span></li>
     <li><b>养护</b><span>|</span></li>
     <li><b>求购</b><span>|</span></li>
     <li><b>商城</b></li>
   </ul>
  <ul className = "option-in">
    <li>今日</li>
    <b></b>
    <li>区域</li>
  </ul>
  <h4 className="like"><b></b><span>猜你喜欢</span><b></b></h4>
  <ul className = "option-bottom">
    <li>
      <img src="http://img2.funshion.com/sdw?oid=8f9e7cb0803d257453288462929ecdc3&w=0&h=0" alt=""/>
      <p>CUCCI/古驰女士单肩...</p>
      <p>￥3000元</p>
    </li>
    <li>
      <img src="http://img2.funshion.com/sdw?oid=8f9e7cb0803d257453288462929ecdc3&w=0&h=0"alt=""/>
      <p>CUCCI/古驰女士单肩...</p>
      <p>￥3000元</p>
    </li>
    <li>
      <img src="http://img2.funshion.com/sdw?oid=8f9e7cb0803d257453288462929ecdc3&w=0&h=0" alt=""/>
      <p>CUCCI/古驰女士单肩...</p>
      <p>￥3000元</p>
    </li>
    <li>
      <img src="http://img2.funshion.com/sdw?oid=8f9e7cb0803d257453288462929ecdc3&w=0&h=0" alt=""/>
      <p>CUCCI/古驰女士单肩...</p>
      <p>￥3000元</p>
    </li>
  </ul>
  </div>
)
export default Option;