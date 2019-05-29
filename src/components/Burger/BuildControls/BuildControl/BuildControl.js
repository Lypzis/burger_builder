import React from 'react';

import Aux from '../../../../hoc/Aux';
import withClass from '../../../../hoc/withClass';

import classes from './BuildControl.css';

const buildControl = props => ( // disabled accepts true or false, property from React
    <Aux>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.remove}
            disabled={props.disabled}>Less</button>
        <button
            className={classes.More}
            onClick={props.add}>More</button>
    </Aux>
);

export default withClass(buildControl, classes.BuildControl);