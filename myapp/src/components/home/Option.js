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
    <li>
      <div className="te">
        <img src="" alt=""/>
      </div>
      <p>欧洲尖货</p>
    </li>
    <b></b>
    <li>
    <div className="te">
        <img src="" alt=""/>
      </div>
      <p>买手精选</p>
    </li>
  </ul>
  <ul className="brand">
    <h4>轻奢品牌</h4>
    <li><img src="" alt=""/></li>
  </ul>
    <div className="like">
      <h4>猜你喜欢</h4>
      <ul className="tux">
        <li><img src="" alt=""/></li>
        <li><img src="" alt=""/></li>
        <li><img src="" alt=""/></li>
        <li><img src="" alt=""/></li>
        <li><img src="" alt=""/></li>
        <li><img src="" alt=""/></li>
      </ul>
    </div>
  </div>
)
export default Option;