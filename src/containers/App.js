import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './App.css';

import Layout from '../hoc/Layout/Layout';
import asyncComponent from '../hoc/asyncComponent/asyncComponent';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Logout from './Auth/Logout/Logout';
import * as actions from '../store/actions/index';

// Lazy Loading
const asyncCheckout = asyncComponent(() => import('./Checkout/Checkout'));
const asyncOrders = asyncComponent(() => import('./Orders/Orders'));
const asyncAuth = asyncComponent(() => import('./Auth/Auth'));

class App extends Component {
	componentDidMount() {
		this.props.onTryAutoSignIn();
	}

	render() {
		// guard routes - these are for unauthenticated users
		let routes = (
			<Switch>
				<Route path='/burger-builder' component={BurgerBuilder} />
				<Route path='/auth' component={asyncAuth} />
				<Redirect from='/' to='/burger-builder' />
			</Switch>
		);

		// and these are accessible for authenticated users
		if (this.props.isAuthenticated)
			routes = (
				<Switch>
					<Route path='/burger-builder' component={BurgerBuilder} />
					<Route path='/auth' component={asyncAuth} />
					{/** needs to be here beacause of the redirection function it contains */}
					<Route path='/orders' component={asyncOrders} />
					<Route path='/checkout' component={asyncCheckout} />
					<Route path='/logout' component={Logout} />
					<Redirect from='/' to='/burger-builder' />
				</Switch>
			);

		return (
			<div className={classes.App}>
				<Layout>{routes}</Layout>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignIn: () => dispatch(actions.authCheckState()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
