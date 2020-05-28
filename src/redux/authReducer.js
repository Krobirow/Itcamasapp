import { authApi } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
	userId: null,
	email: null,
	password: null,
	rememberMe: false,
	login: null,
	isAuth: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: 
			return {
				...state, 
				...action.payload
			}
		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const  getAuthUserData = () => dispatch => { return authApi.authMe()
	.then(data => {if (data.resultCode === 0) dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true))})
};

export const startLogin = (email, password, rememberMe) => dispatch => authApi.loginMe(email, password, rememberMe)
	.then(data => { 
		if (data.resultCode === 0) { 
			dispatch( getAuthUserData() ) 
		} else {
			let message = data.messages.length > 0 ? data.messages[0] : "Email or pass is wrong";
			dispatch(stopSubmit("login", {_error: message}));
		}
	});

export const startLogout = () => dispatch => authApi.logout()
	.then(data => { if (data.resultCode === 0) dispatch( setAuthUserData(null, null, null, false) ) });

export default authReducer;