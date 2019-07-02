import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    // dummy ingredients, just for testing, since its information is redundant
    state = {
        ingredients: {
            salad: 1,
            bacon: 1, 
            cheese: 1,
            meat: 1
        }
    }

    render() {
        return (
            <Aux>
                <CheckoutSummary  ingredients={this.state.ingredients}/>
            </Aux>
        );
    }
} 

export default Checkout;