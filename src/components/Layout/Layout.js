import React from 'react';

import classes from './Layout.css';

import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';

const layout = props => {
    return (
        <Aux>
            <header><p>Toolbar, SideDrawer, Backdrop</p></header>
            <main className={classes.content}>{props.children}</main>
            <footer>Burger Builder © 2019 by Lypzis.</footer>
        </Aux>
    );
}

export default withClass(layout, classes.Layout);