import React from "react";
import s from "./login.module.css";
import { reduxForm, Field } from "redux-form";
import { startLogin, startLogout } from "../../redux/authReducer";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.form} action=''>
			<div>
				<Field
					type={"text"}
					placeholder={"Email"}
					name={"email"}
					component={Input}
					validate={[required]}
				/>
			</div>
			<div>
				<Field
					type={"password"}
					placeholder={"Password"}
					name={"password"}
					component={Input}
					validate={[required]}
				/>
			</div>
			<div>
				<span>
					Remember Me <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required]} /> 
				</span>
			</div>
				{ props.error && <div className={s.formGlobalError}> 
					{props.error}
				</div>}
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
