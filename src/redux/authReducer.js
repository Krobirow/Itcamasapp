import { authApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN_USER = 'LOGIN_USER';

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
				...action.data,
				isAuth: true
			}
		case LOGIN_USER: 
			return {
				...state,
				...action.data,
				isAuth: true,
			}

		default:
			return state;
	}
}

// export const loginProcess = (email, password, rememberMe) => ({type: LOGIN_USER, data: {email, password, rememberMe}});

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export const authorization = () => dispatch => authApi.authMe()
	.then(data => {if (data.resultCode === 0) dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login))});

// export const startLogin = () => dispatch => authApi.loginMe().then(data => { 
// 		if (data.resultCode === 0) {
// 			console.log(data);
// 			dispatch(loginProcess(data.data.email, data.data.password, data.data.rememberMe))
// 		}
// 	});

export default authReducer;