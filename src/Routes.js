import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Welcome from './components/Welcome';
import Navbar from './containers/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
