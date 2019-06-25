import React from 'react';
import Particulars from '@/views/particulars'
import information from '@/components/user/information';
import steup from '@/components/user/steup';
import { Switch, Route } from 'react-router-dom';
import Administration from '@/views/Sign/Administration'
import Sign from '@/views/Sign/sign'
import register from '@/views/Sign/register'

const Details = () => (
  <div className="container">
    <Switch>
      <Route path = "/details/steup" component = { steup }/>
      <Route path = "/details/register" component = { register }/>
      <Route path = "/details/sign" component = { Sign }/>
      <Route path = "/details/administration" component = { Administration }/>
      <Route path = "/details/information" component = { information }/>
      <Route path = "/details/:id" component = { Particulars }/>
    </Switch>
  </div>
)
export default Details;