import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Welcome from './components/Welcome';
import Navbar from './containers/Navbar';
import Home from './components/Home';

const Routes = ({ auth }) => {
  if (auth.authToken === '') {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
Routes.propTypes = {
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authentication,
});

export default connect(mapStateToProps)(Routes);
