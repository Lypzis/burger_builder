import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false // to true if loading fails
}

//Global constants are named entirely in capital letters
const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .6,
    meat: 1.4,
    bacon: .8
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            // key: increment value of respective key, which is the ingrediente I want to add
            const updatedIngredient = { [action.ingredientName]: ++state.ingredients[action.ingredientName] };

            // updatedIngredient is set into 'state.ingredients' where it respectively replaces the old value
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);

            // then the new ingredients and total price are passed into and object
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }

            // which returns the utility function again, passing where the old state values
            // are joined with the updated values, respectively: ingredients and totalPrice.
            return updateObject(state, updatedState);
        case actionTypes.REMOVE_INGREDIENT:
            const updatedIngredient2 = { [action.ingredientName]: --state.ingredients[action.ingredientName] };
            const updatedIngredients2 = updateObject(state.ingredients, updatedIngredient2);
            const updatedState2 = {
                ingredients: updatedIngredients2,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }

            return updateObject(state, updatedState2); // '2' because you can't reassign a const, this obviously not ideal
        case actionTypes.SET_INGREDIENTS: // ingredients initialized
            return updateObject(
                state,
                {
                    ingredients: { // turned into an object for manualy setting the position of ingredients.
                        salad: action.ingredients.salad,
                        bacon: action.ingredients.bacon,
                        cheese: action.ingredients.cheese,
                        meat: action.ingredients.meat // flexibility is lost this way... D: 
                    },
                    totalPrice: 4, // this will reset the price, when back to BurgerBuilder container
                    error: false
                });
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, { error: true });
        default:
            return state;
    }
}

export default reducer;