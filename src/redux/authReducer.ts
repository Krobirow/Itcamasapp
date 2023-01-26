import { authApi, securityApi } from "../api/api";
import { FormAction, stopSubmit } from "redux-form";
import { AppStateType, InferActionTypes } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { ResultCodeForCaptchaEnum, ResultCodesEnum } from "./enums";

enum AuthReducerEnums {
	SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA',
	GET_CAPTHCA_URL = 'samurai-network/auth/GET_CAPTHCA_URL'
}

const initialState = {
	userId: null as null | number,
	email: null as null | string,
	password: null as null | string,
	rememberMe: true as boolean,
	login: null as null | string,
	isAuth: false as boolean,
	captchaURL: null as null | string
}
export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case AuthReducerEnums.SET_USER_DATA: 
			return {
				...state, 
				...action.payload
			}
		case AuthReducerEnums.GET_CAPTHCA_URL: 
			return {
				...state, 
				captchaURL: action.url
			}
		default:
			return state;
	}
}

export type AuthThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export type AuthThunkTypeWithReduxForm = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes | FormAction>
type ActionsTypes = InferActionTypes<typeof authActions>

export const authActions = {
	getCaptchaURLSuccess: (url: string) => ({type: AuthReducerEnums.GET_CAPTHCA_URL, url} as const),
	_setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
		({type: AuthReducerEnums.SET_USER_DATA, payload: {userId, email, login, isAuth}} as const),
}

export const  getAuthUserData = (): AuthThunkType => async (dispatch) => { 
	const data =  await authApi.authMe()
	if (data.resultCode === ResultCodesEnum.Success) dispatch(authActions._setAuthUserData(data.data.id, data.data.email, data.data.login, true));
}

export const startLogin = (email: string, password: string, rememberMe?: boolean, captchaCode?: string): AuthThunkTypeWithReduxForm => async (dispatch) => {
	const data =  await authApi.loginMe(email, password, rememberMe, captchaCode);
	if (data.resultCode === ResultCodesEnum.Success) {
		dispatch( getAuthUserData() )
	} else  {
		if ( data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
			dispatch(getCaptchaURL());
		} 
		const message = data.messages.length > 0 ? data.messages[0] : "Email or pass is wrong";
		dispatch(stopSubmit("login", {_error: message}));
	}
}

export const getCaptchaURL = (): AuthThunkType => async (dispatch) => {
	const data =  await securityApi.captcha();
	const captchaURL = data.url;
	dispatch(authActions.getCaptchaURLSuccess(captchaURL));
}

export const startLogout = (): AuthThunkType => async (dispatch) => {
	const data =  await authApi.logout();
	if (data.resultCode === ResultCodesEnum.Success) dispatch(authActions._setAuthUserData(null, null, null, false) );
}

export default authReducer;