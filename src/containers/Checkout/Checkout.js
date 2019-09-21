import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

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
                    ingredients={this.props.ings} //this.props.location.ingredients
                    cancelOrder={this.cancelCheckoutHandler}
                    continueOrder={this.continueCheckoutHandler} />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData}

                    /*Still renders the component with 
                the advantage of being able to pass props to it :D
                    render={props => (
                        <ContactData
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            {...props} />  distribute properties from this component to 'ContactData'
                    )} */
                    />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
    }
}

export default connect(mapStateToProps)(Checkout); // "dispatched to props" ommited since there is nothing to dispatch here. Can just pass 'null' as well