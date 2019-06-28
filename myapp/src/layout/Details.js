import React from 'react';
import Particulars from '@/views/particulars'
import information from '@/views/information/information';
import steup from '@/views/setup/setup';
import { Switch, Route } from 'react-router-dom';
import Purchase from '@/views/purchase'
import Administration from '@/views/Sign/Administration/Administration'
import Sign from '@/views/Sign/sign/sign'
import register from '@/views/Sign/register/register'

const Details = () => (
  <div className="container">
    <Switch>
      <Route path = "/details/steup" component = { steup }/>
      <Route path = "/details/register" component = { register }/>
      <Route path = "/details/sign" component = { Sign }/>

      <Route path = "/details/purchase" component = { Purchase }/>

      <Route path = "/details/administration" component = { Administration }/>
      <Route path = "/details/information" component = { information }/>
      <Route path = "/details/:id" component = { Particulars }/>
    </Switch>
  </div>
)
export default Details;