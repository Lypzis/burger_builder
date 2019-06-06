import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

import classes from './OrderSummary.css';

class OrderSummary extends Component {

    // This could be a functional component
    /*
    componentWillUpdate() {
        console.log('[OrderSummary.js] will update');
    } */

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingredientKey =>
                <li key={ingredientKey}>
                    <span className={classes.span}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
                </li>);

        return (
            <Aux>
                <h3 className={classes.OrderSummary__header}>Your Order</h3>

                <div className={classes.OrderSummary__body}>
                    <p>A delicious burger with the following ingredients: </p>

                    <ul>
                        {ingredientSummary}
                    </ul>
                    <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                    <p>Continue to checkout?</p>
                </div>

                <Button btnType="Danger" clicked={this.props.purchaseCancel}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
            </Aux>
        );
    }
};

export default OrderSummary;