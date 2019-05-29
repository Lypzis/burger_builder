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
        totalPrice: 4,
        purchasable: false
    };

    /**
     * Updates the 'purchasable' attribute of the state to true if total value of ingredients
     * is greater than 0, else remains or is returned to false;
     * @param {Object} updatedIngredients Up to date copy of this.state.ingredients;
     */
    updatePurchaseState = updatedIngredients => {
        const total = Object.keys(updatedIngredients)
            .map(ingredientKey => updatedIngredients[ingredientKey]) //maps keys, returning the specific ingredient values from const 'ingredients'
            .reduce((total, ingreditentValue) => total + ingreditentValue, 0);  // then sums it to a total. initial value is 0

        this.setState({ purchasable: total > 0 }); // true if at least 1 ingredient is added to the burger
    }

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

       this.updatePurchaseState(updatedIngredients);
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
        const disabledInfo = { ...this.state.ingredients };

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
                    price={this.state.totalPrice} 
                    purchasable={this.state.purchasable}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;