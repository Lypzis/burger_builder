import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1, 
            cheese: 1,
            meat: 1
        }
    }

    componentDidMount() {
        // this will abstract URLSearchParams into usefull values 
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};

        for (let param of query.entries()) {
            // this line is ['salad', '1'] and so on 
            // respectively becoming ingredients={ salad: 1, ... }
            ingredients[param[0]] = +param[1]; 
        }

        this.setState({
            ingredients: {
                salad: ingredients.salad,
                bacon: ingredients.bacon, 
                cheese: ingredients.cheese,
                meat: ingredients.meat
            }
        })
    }

    cancelCheckoutHandler = () => {
        this.props.history.goBack(); //goes back to the last page, duh :D
    }

    continueCheckoutHandler = () => {
        this.props.history.replace('/checkout/contact-data'); //replaces current url
    }

    render() {

        return (
            <Aux>
                <CheckoutSummary
                    ingredients={this.state.ingredients} //this.props.location.ingredients
                    cancelOrder={this.cancelCheckoutHandler}
                    continueOrder={this.continueCheckoutHandler} />
            </Aux>
        );
    }
}

export default Checkout;