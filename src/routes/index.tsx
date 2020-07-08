import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// Switch permite que apenas uma rota seja mostrada por momento
// Route para roda da aplicação

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
