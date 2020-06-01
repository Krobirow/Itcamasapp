import React from "react";
import s from "./login.module.css";
import { reduxForm, Field } from "redux-form";
import { startLogin, startLogout } from "../../redux/authReducer";
import { Input, createField } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit} className={s.form} action=''>
			{createField("text", "Email", "email", [required], Input)}
			{createField("password", "Password", "password", [required], Input)}
			<div className={s.formCheckbox}>
				<span>
					Remember Me 
				</span>
				{createField("checkbox", null, "rememberMe", null, Input)}
			</div>
				{ error && <div className={s.formGlobalError}>{error}</div> }
			<div>
				<button type='submit'>Login</button>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.startLogin(formData.email, formData.password, formData.rememberMe)
	};

	if(props.isAuth) {
		return <Redirect to={"/profile"} />
	}

	return (
		<div className={s.loginWrapper}>
			<h1 className={s.title}>Login</h1>
			<div className={s.formWrapper}>
				<LoginReduxForm onSubmit={onSubmit} />
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {startLogin, startLogout})(Login);
