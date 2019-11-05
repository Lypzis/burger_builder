import * as actionTypes from '../actions/actionsTypes';

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
            return {
                ...state,
                ingredients: {
                    ...state.ingredients, // deep clone of ingredients already on the burger, remember
                    // key: increment value of respective key, which is the ingrediente I want to add
                    [action.ingredientName]: ++state.ingredients[action.ingredientName] 
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: --state.ingredients[action.ingredientName]
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.SET_INGREDIENTS: // ingredients initialized
            return {
                ...state,
                ingredients: { // turned into an object for manualy setting the position of ingredients.
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat // flexibility is lost this way... D: 
                },
                error: false
            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

export default reducer;