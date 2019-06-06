import React, { Component } from 'react';

import classes from './Layout.css';

import Aux from '../Aux/Aux';
import withClass from '../WithClass/withClass';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    // negates previous 'showSideDrawer' from the state
    sideDrawerToggleHandler = () => {
        this.setState( prevState => { return {showSideDrawer: !prevState.showSideDrawer} });
    }

    render() {
        return (
            <Aux>
                <Toolbar toggle={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <header><p>SideDrawer</p></header>
                <main className={classes.content}>{this.props.children}</main>
                <footer>Burger Builder © 2019 by Lypzis.</footer>
            </Aux>
        );
    }
}

export default withClass(Layout, classes.Layout);