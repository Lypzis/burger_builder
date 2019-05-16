import React from 'react';
import classes from './App.css';

import Layout from '../components/Layout/Layout';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <p>I am a Layout! :D</p>
      </Layout>    
    </div>
  );
}

export default App;
