import React, { Component } from 'react';

import axios from '../../../axios';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Zip Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ''
            },

            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'none', displayValue: '-- Select --' },
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' },
                    ]
                },
                value: ''
            },

        },
        loading: false
    }

    orderHandler = event => {
        event.preventDefault();

        this.setState({ loading: true });

        const formData = {};

        for(let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, // this should be checked in backend to see if it is not being manipulated
            orderData: formData
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

    inputChangedHandler = (event, inputIdentifier) => {
        // Here order form is cloned superficially
        const updatedOrderForm = {...this.state.orderForm};
        // And down here its objects are deeply cloned, for safely changing 'value'
        const updatedFormElement = {...updatedOrderForm[inputIdentifier]};

        updatedFormElement.value = event.target.value; // so the value is updated here

        updatedOrderForm[inputIdentifier] = updatedFormElement; // and then updated to the cloned form

        this.setState({orderForm: updatedOrderForm});
    }

    renderInputs = () => {
        const accumulator = [];

        for (let input in this.state.orderForm) {
            accumulator.push(
                <Input
                    key={input}
                    elementType={this.state.orderForm[input].elementType}
                    elementConfig={this.state.orderForm[input].elementConfig}
                    value={this.state.orderForm[input].value} 
                    changed={event => this.inputChangedHandler(event, input)} required />
            );
        }

        return accumulator;
    }

    render() {
        const inputs = this.renderInputs();

        let form = (
            <form onSubmit={this.orderHandler}>
                {inputs}
                <Button btnType="success">ORDER</Button>
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