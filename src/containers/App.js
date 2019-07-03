import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import classes from './App.css';

import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';

const App = props => {
  return (
    <div className={classes.App} >
      <Layout>
        <Switch>
          <Route path="/burger-builder" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Redirect from="/" to="/burger-builder" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
