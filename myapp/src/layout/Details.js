import React from 'react';
import Particulars from '@/views/particulars'
import { Switch, Route } from 'react-router-dom';
const Details = () => (
  <div className="container">
    <Switch>
      <Route path = "/details/:id" component = { Particulars }/>
    </Switch>
  </div>
)
export default Details;