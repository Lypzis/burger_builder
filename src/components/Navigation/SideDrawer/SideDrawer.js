import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

import classes from './SideDrawer.css';

const sideDrawer = props => {
    let attachedClass = [classes.SideDrawer, classes.Close];

    if (props.open) attachedClass =  [classes.SideDrawer, classes.Open];

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>

            <div className={attachedClass.join(' ')} onClick={props.closed}> {/** props.closed put in here, so anywhere clicked in the menu,it will close */}
                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;