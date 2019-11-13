import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';

import classes from './Auth.css';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },

            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true
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

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }

        this.setState({ controls: updatedControls });
    }

    renderInputs = () => {
        const accumulator = [];

        for (let input in this.state.controls) {
            accumulator.push(
                <Input
                    key={input}
                    elementType={this.state.controls[input].elementType}
                    elementConfig={this.state.controls[input].elementConfig}
                    value={this.state.controls[input].value}
                    invalid={!this.state.controls[input].valid}
                    shouldValidate={this.state.controls[input].validation}
                    touched={this.state.controls[input].touched}
                    changed={event => this.inputChangedHandler(event, input)}
                    required />
            );
        }

        return accumulator;
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup }
        });
    }

    render() {
        const inputs = this.renderInputs();

        let form = this.props.loading ?
            <Spinner /> :
            <form onSubmit={this.submitHandler}>
                {inputs}
                {/* button to submit form is disable if form is not valid */}
                <Button btnType="Success">SUBMIT</Button> {/*disabled={!this.state.formIsValid}*/}
            </form>; // if loading, show spinner, else, show 'form', it's simple as that 

        //OBS: this show the default message error that Firebase gives, you can set up your own of course!
        let errorMessage = null; 
        
        if(this.props.error) errorMessage = <p>{this.props.error.message}</p>;
        

        // button will dispatch an action when pressed, use of redux here :D
        return (
            <div className={classes.Auth}>
                {errorMessage}
                {form}
                <Button
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGN UP' : 'SIGN IN'}</Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);