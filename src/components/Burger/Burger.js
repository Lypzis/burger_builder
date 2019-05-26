import React from 'react';

import classes from './Burger.css';

import withClass from '../../hoc/withClass';
import Aux from '../../hoc/Aux';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
        // returns an array of the respective ingredient value.
        // the "Array()" method will create something like [cheese, cheese], 
        // which is the given number value for that ingredient
        return [...Array(props.ingredients[ingKey])].map((_, index) =>  // then, maps them/it into components 
            <BurgerIngredient key={ingKey + index} type={ingKey} />
        );// "Object.keys" turns an object's keys into an array
    }).reduce((arr, el) => { // reduce gets each element of the array, parameters are the accumulator and current element 
        return arr.concat(el);
    }, []); // initial value

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please, add some ingredients! :D</p>
    };

    return (
        <Aux>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </Aux>
    );
}

export default withClass(Burger, classes.Burger); 