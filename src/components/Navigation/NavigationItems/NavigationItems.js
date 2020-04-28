import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = (
	props // first item activated by default
) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link='/burger-builder'>Burger Builder</NavigationItem>
		{props.isAuthenticated ? (
			<NavigationItem link='/orders'>Orders</NavigationItem>
		) : null}
		{props.isAuthenticated ? (
			<NavigationItem link='/logout'>Logout</NavigationItem>
		) : (
			<NavigationItem link='/auth' exact>
				Authenticate
			</NavigationItem>
		)}
	</ul>
);

export default navigationItems;
