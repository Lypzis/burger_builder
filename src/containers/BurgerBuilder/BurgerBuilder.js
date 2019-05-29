import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Aux from '../../hoc/Aux';

//Global constants are named entirely in capital letters
const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .6,
    meat: 1.4,
    bacon: .8
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        purchased: true,
        totalPrice: 4
    };

    /**
     * @param {object} ingredients
     * @param {float} totalPrice
     * @param {string} type
     */
    updateBurger = (ingredientsCount, totalPrice, type) => {
        const updatedIngredients = {
            ...this.state.ingredients // fill this object with this.state.ingredients attributes
        };                            // it becomes a copy of the current state

        updatedIngredients[type] = ingredientsCount; // update the respective ingredient value

        this.setState({
            ingredients: updatedIngredients,
            totalPrice
        });

         /*
        this.setState((prevState, props) => {
            return {
                person: persons,
                changeCounter: prevState.changeCounter + 1 // refers to previous state, to avoid asynchronous misscalculations/errors
            }
            // update state with the new information
        });*/
    } 

    /**
     * @param {string} type 
     */
    addIngredientHandler = type => {
        const updatedCount = this.state.ingredients[type] + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.updateBurger(updatedCount, newPrice, type);
    }

    /**
     * @param {string} type 
     */
    removeIngredientHandler = type => {
        const updatedCount = this.state.ingredients[type] - 1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        if (updatedCount >= 0) // ...or equals 0 ??? arrays start on 0, duh!
            this.updateBurger(updatedCount, newPrice, type);
    }

    render() {
        const disabledInfo = {...this.state.ingredients};

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0; // replaces values with true or false if it attends the condition
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo} 
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;