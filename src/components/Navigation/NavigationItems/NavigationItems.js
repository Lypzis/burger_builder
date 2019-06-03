import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = props => ( // first item activated by default
    <ul className={classes.NavigationItems}>
        <NavigationItem link="#" active>Burger Builder</NavigationItem>
        <NavigationItem link="#">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;