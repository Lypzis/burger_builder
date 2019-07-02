import React from 'react';
import classes from './App.css';

import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';

const App = props => {
    return ( // The routes will be added here later
      <div className={classes.App} >
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    );
}

export default App;
