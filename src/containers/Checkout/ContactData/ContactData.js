import React, { Component } from 'react';

import axios from '../../../axios';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = event => {
        event.preventDefault();
        console.log(this.props.ingredients);

        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, // this should be checked in backend to see if it is not being manipulated
            customer: {
                name: 'Victor Piccoli',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '12345',
                    country: 'Brazil'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', order) // firebase syntax requires '.json', you can simulate an error by removing it :D
            .then(response => {
                console.log(response);

                this.setState({ loading: false });
                this.props.history.replace('/burger-builder');
            }).catch(err => {
                console.log(err);

                this.setState({ loading: false });
                this.props.history.replace('/burger-builder');
            });
    }

    render() {
        let form = (
            <form action="">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Mail" required />
                <input type="text" name="street" placeholder="Street" required />
                <input type="text" name="postal" placeholder="Postal Code" required />
                <Button btnType="success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading)
            form = <Spinner />;

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;