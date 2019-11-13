import * as actionTypes from './actionsTypes';
import axios from '../../axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
           dispatch(logout());
        }, expirationTime * 1000); // * 1000 to turn the value into milliseconds
    }
}

// method: on signup or signin
export const auth = (email, password, isSignup) => {
    return async dispatch => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        const key = 'AIzaSyDM078rTCeYSqIRl1CnEWvH1uK4NW8OhYg';
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;

        if(isSignup)
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;

        try {
            const res = await axios.post(url, authData);
            console.log(res);
            dispatch(authSuccess(res.data.idToken, res.data.localId));
            dispatch(checkAuthTimeout(res.data.expiresIn))
        } catch(err) {
            console.log(err.response.data.error.message); // this is what I want to show in Auth.js
            dispatch(authFail(err.response.data.error));
        }
    }
}