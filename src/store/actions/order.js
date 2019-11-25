import * as actionTypes from './actionsTypes';
import axios from '../../axios';

export const purchaseBurgerSuccess = (id, orderData) => {
    console.log(orderData);

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

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (token, orderData) => {
    return async dispatch => {

        // loading
        dispatch(purchaseBurgerStart());

        try {
            const response = await axios.post(`/orders.json?auth=${token}`, orderData) // firebase syntax requires '.json', you can simulate an error by removing it :D

            console.log(response.data);

            // yes, the id is coming from 'name' property
            dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        } catch (err) {
            dispatch(purchaseBurgerFail(err));
        }

    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrderSuccess = orders => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = error => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token, userId) => {
    return async dispatch => {
        dispatch(fetchOrdersStart());

        //now only the owner of the order will see the order, obs: this query is Firebase specific
        const queryParams= `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;

        try {
            const response = await axios.get(`/orders.json${queryParams}`); // only authenticated user(with token) may view orders
            //console.log(response.data);
            // to turn multiple objects into one array
            const fetchedOrders = []; // this will hold order objects
            for (let key in response.data) {
                fetchedOrders.push(
                    {
                        ...response.data[key], // this will distribute all attributes to the object being pushed
                        id: key     // and this will make sure that we won't lose its key
                    }
                );
            }

            dispatch(fetchOrderSuccess(fetchedOrders));
        } catch (err) {
            dispatch(fetchOrdersFail(err));
        }
    }
}