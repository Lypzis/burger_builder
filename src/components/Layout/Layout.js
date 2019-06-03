import React from 'react';

import classes from './Layout.css';

import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = props => {
    return (
        <Aux>
            <Toolbar />
            <SideDrawer />
            <header><p>SideDrawer</p></header>
            <main className={classes.content}>{props.children}</main>
            <footer>Burger Builder © 2019 by Lypzis.</footer>
        </Aux>
    );
}

export default withClass(layout, classes.Layout);