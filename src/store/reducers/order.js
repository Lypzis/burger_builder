import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return updateObject(state, { purchased: false }); // resets when going to checkout 
        case actionTypes.PURCHASE_BURGER_START:
            return updateObject(state, { loading: true }); // loading complete
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = updateObject(action.orderData, { id: action.orderId });
            return updateObject(state, {
                loading: false,
                orders: state.orders.concat(newOrder), // remember with concat the array is added immutably, creating a new one :D
                purchased: true
            });
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updateObject(state, { loading: false });
        case actionTypes.FETCH_ORDERS_START:
            return updateObject(state, { loading: true });
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return updateObject(state, {
                orders: action.orders, // as is set in fetchedOrderSuccess in actions/order.js
                loading: false // it is not loading anylonger at this point
            });
        case actionTypes.FETCH_ORDERS_FAIL:
            return updateObject(state, { loading: false });
        default:
            return state;
    }
}

export default reducer;