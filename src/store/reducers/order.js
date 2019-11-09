import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseInit = (state, action) => {
    return updateObject(state, { purchased: false }); // resets when going to checkout 
}

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, { loading: true }); // loading complete
}

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, { id: action.orderId });
    return updateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder), // remember with concat the array is added immutably, creating a new one :D
        purchased: true
    });
}

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, { loading: false });
}

const fetchOrdersStart = (state, action) => {
    return updateObject(state, { loading: true });
}

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders, // as is set in fetchedOrderSuccess in actions/order.js
        loading: false // it is not loading anylonger at this point
    });
}

const fetchOrdersFail = (state, action) => {
    return updateObject(state, { loading: false });
}

// ADD a delete function here, as a challenge

// now the reducer is very small :D, making it easier to read
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START:
            return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL:
            return purchaseBurgerFail(state, action)
        case actionTypes.FETCH_ORDERS_START:
            return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL:
            return fetchOrdersFail(state, action);
        default:
            return state;
    }
}

export default reducer;