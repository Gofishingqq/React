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
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/kind">分类</NavLink>
        <NavLink to="/release">发布</NavLink>
        <NavLink to="/cart">购物车</NavLink>
        <NavLink to="/user">我的</NavLink>
      </ul>
    </footer>
  </div>
)

export default App;
