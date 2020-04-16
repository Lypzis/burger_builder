import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';

import classes from './Auth.css';

class Auth extends Component {
	state = {
		controls: {
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Mail Address',
				},
				value: '',
				validation: {
					required: true,
					isEmail: true,
				},
				valid: false,
				touched: false,
			},

			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password',
				},
				value: '',
				validation: {
					required: true,
					minLength: 6,
				},
				valid: false,
				touched: false,
			},
		},
		isSignup: true,
	};

	componentDidMount() {
		// resets page if not building a burger
		if (!this.props.buildingBurger && this.props.authRedirectPath !== '/')
			this.props.onSetAuthRedirectPath();
	}

	inputChangedHandler = (event, controlName) => {
		const updatedControls = updateObject(this.state.controls, {
			[controlName]: updateObject(this.state.controls[controlName], {
				value: event.target.value,
				valid: checkValidity(
					event.target.value,
					this.state.controls[controlName].validation
				),
				touched: true,
			}),
		});

		this.setState({ controls: updatedControls });
	};

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
					required
				/>
			);
		}

		return accumulator;
	};

	submitHandler = event => {
		event.preventDefault();
		this.props.onAuth(
			this.state.controls.email.value,
			this.state.controls.password.value,
			this.state.isSignup
		);
	};

	switchAuthModeHandler = () => {
		this.setState(prevState => {
			return { isSignup: !prevState.isSignup };
		});
	};

	render() {
		const inputs = this.renderInputs();

		let form = this.props.loading ? (
			<Spinner />
		) : (
			<form onSubmit={this.submitHandler}>
				{inputs}
				{/* button to submit form is disable if form is not valid */}
				<Button btnType='Success'>SUBMIT</Button>{' '}
				{/*disabled={!this.state.formIsValid}*/}
			</form>
		); // if loading, show spinner, else, show 'form', it's simple as that

		//OBS: this show the default message error that Firebase gives, you can set up your own of course!
		let errorMessage = null;

		if (this.props.error) errorMessage = <p>{this.props.error.message}</p>;

		let authRedirect = null;

		if (this.props.isAuthenticated)
			// redirect user  authenticated to home
			authRedirect = <Redirect to={this.props.authRedirectPath} />;

		// button will dispatch an action when pressed, use of redux here :D
		return (
			<div className={classes.Auth}>
				{authRedirect}
				{errorMessage}
				{form}
				<Button clicked={this.switchAuthModeHandler} btnType='Danger'>
					SWITCH TO {this.state.isSignup ? 'SIGN UP' : 'SIGN IN'}
				</Button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuthenticated: state.auth.token !== null,
		buildingBurger: state.burgerBuilder.building,
		authRedirectPath: state.auth.authRedirectPath,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password, isSignup) =>
			dispatch(actions.auth(email, password, isSignup)),
		onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')), // path hardcoded
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
