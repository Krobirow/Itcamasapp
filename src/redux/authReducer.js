import { authApi, securityApi } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTHCA_URL = 'samurai-network/auth/GET_CAPTHCA_URL';

let initialState = {
	userId: null,
	email: null,
	password: null,
	rememberMe: false,
	login: null,
	isAuth: false,
	captchaURL: null 
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: 
			return {
				...state, 
				...action.payload
			}
		case GET_CAPTHCA_URL: 
			return {
				...state, 
				captchaURL: action.url
			}
		default:
			return state;
	}
}

const getCaptchaURLSuccess = (url) => ({type: GET_CAPTHCA_URL, url})

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const  getAuthUserData = () => async dispatch => { 
	let data =  await authApi.authMe()
	
	if (data.resultCode === 0) dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true));
};

export const startLogin = (email, password, rememberMe, captchaCode) => async dispatch => {
	let data =  await authApi.loginMe(email, password, rememberMe, captchaCode);
	if (data.resultCode === 0) {
		dispatch( getAuthUserData() )
	} else  {
		if ( data.resultCode === 10) {
			dispatch(getCaptchaURL());
		} 
		let message = data.messages.length > 0 ? data.messages[0] : "Email or pass is wrong";
		dispatch(stopSubmit("login", {_error: message}));
	}
};

export const getCaptchaURL = () => async dispatch => {
	const data =  await securityApi.captcha();

	const captchaURL = data.url;
	console.log(captchaURL);

	dispatch(getCaptchaURLSuccess(captchaURL));
};

export const startLogout = () => async dispatch => {
	let data =  await authApi.logout();
	if (data.resultCode === 0) dispatch( setAuthUserData(null, null, null, false) );
};

export default authReducer;