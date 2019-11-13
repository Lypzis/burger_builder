import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import classes from './App.css';

import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';
import Orders from './Orders/Orders';
import Auth from './Auth/Auth';
import Logout from './Auth/Logout/Logout';

const App = props => {
  return (
    <div className={classes.App} >
      <Layout>
        <Switch>
          <Route path="/burger-builder" component={BurgerBuilder} />
          <Route path="/orders" component={Orders} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Redirect from="/" to="/burger-builder" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
