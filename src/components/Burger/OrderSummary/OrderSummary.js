import React from 'react';

import Aux from '../../../hoc/Aux';

import classes from './OrderSummary.css';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => 
        <li key={ingredientKey}>
            <span className={classes.span}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
        </li>);

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>

            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
};

export default orderSummary;