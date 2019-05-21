import React from 'react';

import classes from './Burger.css';

import withClass from '../../hoc/withClass';
import Aux from '../../hoc/Aux';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
    return (
        <Aux>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </Aux>
    );
}

export default withClass(Burger, classes.Burger); 