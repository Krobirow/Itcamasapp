import React from "react";
import s from "./login.module.css";
import { InjectedFormProps, reduxForm } from "redux-form";
import { startLogin, startLogout } from "../../redux/authReducer";
import { Input, createField } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";

type LoginFormOwnProps = {
	captchaURL: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFromValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaURL}) => {
	return (
		<form onSubmit={handleSubmit} className={s.form} action=''>
			{createField<LoginFormValuesTypeKeys>("text", "Email", "email", [required], Input)}
			{createField<LoginFormValuesTypeKeys>("password", "Password", "password", [required], Input)}
			<div className={s.formCheckbox}>
				<span>
					Remember Me 
				</span>
				{createField<LoginFormValuesTypeKeys>("checkbox", undefined, "rememberMe", [], Input)}
			</div>
				{ captchaURL  && <img src={captchaURL} alt={''}/>}
				{ captchaURL  && createField<LoginFormValuesTypeKeys>("text", "captcha", "captcha", [required], Input)}
				{ error && <div className={s.formGlobalError}>{error}</div> }
			<div>
				<button type='submit'>Login</button>
			</div>
		</form>
	);
};


const LoginReduxForm = reduxForm<LoginFromValuesType, LoginFormOwnProps>({ form: "login" })(LoginForm);

export type LoginFromValuesType = {
	email: string, password: string, rememberMe?: boolean, captcha?: string
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFromValuesType, string>

const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
	const onSubmit = (formData: LoginFromValuesType) => {
		console.log(formData);
		props.startLogin(formData.email, formData.password, formData.rememberMe, formData.captcha)
	};

	if(props.isAuth) {
		return <Redirect to={"/profile"} />
	}

	return (
		<div className={s.loginWrapper}>
			<h1 className={s.title}>Login</h1>
			<div className={s.formWrapper}>
				<LoginReduxForm captchaURL={props.captcha} onSubmit={onSubmit} />
			</div>
		</div>
	);
};

type MapStateToPropsType = {
	captcha: string | null
	isAuth: boolean
}

type MapDispatchToPropsType = {
	startLogin: (email: string, password: string, rememberMe?: boolean, captchaCode?: string) => void
	startLogout: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	isAuth: state.auth.isAuth,
	captcha: state.auth.captchaURL
})


export default connect(mapStateToProps, {startLogin, startLogout})(Login);
