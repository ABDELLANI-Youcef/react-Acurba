import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Login from './containers/Login';
import Welcome from './components/Welcome';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
