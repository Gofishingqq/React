import React from 'react';
import Home from '@/views/home';
import Cart from '@/views/cart';
import Kind from '@/views/kind';
import Release from '@/views/release';
import User from '@/views/user';
import Merchant from '@/views/merchant/Ui';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import '@/app.scss';
const App = () => (
  <div className="container">
    <Switch>
      <Route path = "/home" component = { Home }/>
      <Route path = "/kind" component = { Kind }/>
      <Route path = "/release" component = { Release }/>
      <Route path = "/cart" component = { Cart }/>


      <Route path = "/user" component = { User }/>
      <Route path = "/merchant" component = { Merchant } />
      <Redirect to = "/home"/>
    </Switch>
    <footer className="footer">
      <ul>
        <NavLink to="/home"><span className="te1 iconfont icon-yemian-copy-copy"></span><span>首页</span></NavLink>
        <NavLink to="/kind"><span className="te2 iconfont icon-leimupinleifenleileibie"></span><span>分类</span></NavLink>
        <NavLink to="/release"><span className="te3 iconfont icon-tianjia"></span></NavLink>
        <NavLink to="/cart"><span className="te4 iconfont icon-gouwuche"></span><span>购物车</span></NavLink>
        <NavLink to="/user"><span className="te5 iconfont icon-yonghu"></span><span>我的</span></NavLink>
      </ul>
    </footer>
  </div>
)

export default App;
