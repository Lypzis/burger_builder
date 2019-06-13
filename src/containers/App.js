import React from 'react';
import classes from './App.css';

import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

const App = props => {
    return (
      <div className={classes.App} >
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
}

export default App;
