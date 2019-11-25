import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../../axios';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index';
import { updateObject } from '../../../shared/utility';

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
                value: '',

                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',

                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Zip Code'
                },
                value: '',

                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',

                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',

                validation: {
                    required: true
                },
                valid: false,
                touched: false
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
                value: 'fastest',
                validation: {},
                valid: false
            },

        },
        formIsValid: false,
        loading: false
    }

    orderHandler = event => {
        event.preventDefault();

        const formData = {};

        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        const order = {
            ingredients: this.props.ings,
            price: this.props.price, // this should be checked in backend to see if it is not being manipulated
            orderData: formData,
            userId: this.props.userId
        };

        // executes action
        this.props.onOrderBurger(this.props.token, order);
    }

    checkValidity = (value, rules) => {
        let isValid = true; // starts as valid

        // depends on which rules we have
        if (rules.required)
            isValid = value.trim() !== '' && isValid; // basically checking if field value is empty or filled with white spaces

        // another example
        if (rules.minLength)
            isValid = value.length >= rules.minLength && isValid;

        if (rules.maxLength)
            isValid = value.length <= rules.maxLength && isValid;

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        // passing 'isValid' to all the verifications will make sure that if
        // it gets reproved in one of them, it won't pass in any other.
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {

        // And down here its objects are deeply cloned, for safely changing 'value'
        const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
            //...updatedOrderForm[inputIdentifier]
            value: event.target.value, // so the value is updated here
            valid: this.checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
            touched: true
        });

        // Here order form is cloned superficially
        const updatedOrderForm = updateObject(this.state.orderForm, {
            [inputIdentifier]: updatedFormElement // and then updated to the cloned form
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid; // :D, remember if one is false, everything is!
        }

        console.log(formIsValid);

        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
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
                    invalid={!this.state.orderForm[input].valid}
                    shouldValidate={this.state.orderForm[input].validation}
                    touched={this.state.orderForm[input].touched}
                    changed={event => this.inputChangedHandler(event, input)}
                    required />
            );
        }

        return accumulator;
    }

    render() {
        const inputs = this.renderInputs();

        let form = (
            <form onSubmit={this.orderHandler}>
                {inputs}
                {/* button to submit form is disable if form is not valid */}
                <Button btnType="success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );

        if (this.props.loading)
            form = <Spinner />;

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.orders.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (token, orderData) => dispatch(actions.purchaseBurger(token, orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));