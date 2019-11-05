import * as actionTypes from './actionsTypes';
import axios from '../../axios';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = error => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = (orderData) => {
    return async dispatch => {

        try {
            const response = await axios.post('/orders.json', orderData) // firebase syntax requires '.json', you can simulate an error by removing it :D
        
            console.log(response.data);

            dispatch(purchaseBurgerSuccess(response.data, orderData));
        } catch (err) {
            dispatch(purchaseBurgerFail(err));
        }
        
    }
}