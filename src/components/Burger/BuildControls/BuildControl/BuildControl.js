import React from 'react';

import Aux from '../../../../hoc/Aux';
import withClass from '../../../../hoc/withClass';

import classes from './BuildControl.css';

const buildControl = props => (
    <Aux>
        <div className={classes.Label}>{props.label}TestLabel</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </Aux>    
);

export default withClass(buildControl, classes.BuildControl);