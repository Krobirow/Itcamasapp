import React from "react";
import s from "./login.module.css";
import { reduxForm, Field } from "redux-form";
import { startLogin, loginProcess } from "../../redux/authReducer";
import { authApi } from "../../api/api";

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.form} action=''>
			<div>
				<Field
					type={"text"}
					placeholder={"Email"}
					name={"email"}
					component={"input"}
				/>
			</div>
			<div>
				<Field
					type={"text"}
					placeholder={"Password"}
					name={"password"}
					component={"input"}
				/>
			</div>
			<div>
				<p>
					<Field type={"checkbox"} name={"rememberMe"} component={"input"} />
					Remember Me
				</p>
			</div>
			<div>
				<button type='submit'>Login</button>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);
		// const { email, password, rememberMe } = formData;
		// // startLogin(email, password, rememberMe);

		// authApi.loginMe().then((data) => {
		// 	console.log(data);
		// 	if (data.resultCode === 0) {
		// 		loginProcess(email, password, rememberMe);
		// 	}
		// });
	};

	return (
		<div className={s.loginWrapper}>
			<h1 className={s.title}>Login</h1>
			<div className={s.formWrapper}>
				<LoginReduxForm onSubmit={onSubmit} />
			</div>
		</div>
	);
};

export default Login;
