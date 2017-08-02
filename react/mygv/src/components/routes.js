import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import Dashboard from './dashboard';
import Account from './account';

const Routes = () => (
  <routes>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/account' component={Account} />
    </Switch>
  </routes>
);

export default Routes;
