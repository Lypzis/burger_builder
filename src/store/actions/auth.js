import * as actionTypes from './actionsTypes';
import axios from '../../axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = authData => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password) => {
    return async dispatch => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        try {
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDM078rTCeYSqIRl1CnEWvH1uK4NW8OhYg', authData);
            console.log(res);
            dispatch(authSuccess(res.data));
        } catch(err) {
            console.log(err.error);
            dispatch(authFail(err));
        }
    }
}