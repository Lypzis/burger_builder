import React from 'react';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const buildControls = props => (
    <Aux>
        <BuildControl />
        <BuildControl />
        <BuildControl />
    </Aux>
);

export default withClass(buildControls, classes.BuildControls);