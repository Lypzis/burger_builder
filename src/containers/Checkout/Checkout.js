import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount() {
        // this will abstract URLSearchParams into usefull values 
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;

        for (let param of query.entries()) {
            // this line is ['salad', '1'] and so on 
            // respectively becoming ingredients={ salad: 1, ... }
            if (param[0] === 'price') // there is a better way
            {
                price = param[1];

            } else
                ingredients[param[0]] = +param[1];
        }

        this.setState({
            ingredients: {
                salad: ingredients.salad,
                bacon: ingredients.bacon,
                cheese: ingredients.cheese,
                meat: ingredients.meat
            },
            totalPrice: price
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
                <Route
                    path={this.props.match.path + '/contact-data'}
                    /*Still renders the component with 
                the advantage of being able to pass props to it :D*/
                    render={props => (
                        <ContactData
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            {...props} /> /* distribute properties from this component to 'ContactData' */
                    )} />
            </Aux>
        );
    }
}

export default Checkout;