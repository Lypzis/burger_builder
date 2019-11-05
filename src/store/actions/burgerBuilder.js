import * as actionTypes from './actionsTypes';
import axios from '../../axios';

export const addIngredient = name => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = name => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

// this will be only used internally, even it has 'export'
export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}
export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

// Fetching ingredients asynchronously
export const initIngredients = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/ingredients.json');

            // dispatches response received from server
            dispatch(setIngredients(response.data));
        } catch (err) {
            //console.log(err);
            dispatch(fetchIngredientsFailed());
        }
    }
}