import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './App.css';

import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';
import Orders from './Orders/Orders';
import Auth from './Auth/Auth';
import Logout from './Auth/Logout/Logout';
import * as actions from '../store/actions/index';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignIn();
  }

  render() {

    // guard routes - these are for unauthenticated users
    let routes = (
      <Switch>
        <Route path="/burger-builder" component={BurgerBuilder} />
        <Route path="/auth" component={Auth} />
        <Redirect from="/" to="/burger-builder" />
      </Switch>
    );

    // and these are accessible for authenticated users
    if (this.props.isAuthenticated)
      routes = (
        <Switch>
          <Route path="/burger-builder" component={BurgerBuilder} />
          <Route path="/auth" component={Auth} /> {/** needs to be here beacause of the redirection function it contains */}
          <Route path="/orders" component={Orders} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/logout" component={Logout} />
          <Redirect from="/" to="/burger-builder" />
        </Switch>
      );

    return (
      <div className={classes.App} >
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
