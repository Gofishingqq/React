import React from 'react';
import Particulars from '@/views/particulars'
import information from '@/components/user/information';
import { Switch, Route } from 'react-router-dom';
const Details = () => (
  <div className="container">
    <Switch>
      <Route path = "/details/information" component = { information }/>
      <Route path = "/details/:id" component = { Particulars }/>
    </Switch>
  </div>
)
export default Details;