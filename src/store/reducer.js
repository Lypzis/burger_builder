import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
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
                    [action.payload.ingredientName]: ++state.ingredients[action.payload.ingredientName] 
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]: --state.ingredients[action.payload.ingredientName]
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload.ingredientName]
            };
        default:
            return state;
    }
}

export default reducer;