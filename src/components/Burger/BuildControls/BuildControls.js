import React from 'react';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    // ...
];

const buildControls = props => ( // to fixed will fix the price value to have only two number after the dot.
    <Aux>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {
            controls.map(control => <BuildControl
                key={control.label}
                label={control.label}
                add={props.addIngredient.bind(this, control.type)}
                remove={props.removeIngredient.bind(this, control.type)}
                disabled={props.disabled[control.type]} />
            )
        }
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </Aux>
);

export default withClass(buildControls, classes.BuildControls);