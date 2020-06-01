import React from "react";
import s from "./formControls.module.css";
import { required } from "../../../utils/validators/validators";
import { Field } from "redux-form";

export const FormControl = ({ input, meta: {touched, error}, children}) => {
	const hasError = touched && error;
	return (
		<div className={s.formControl + " " + (hasError ? s.error : "")}>
			{children}
			{hasError && <span>{error}</span>}
		</div>
	);
};

export const Input = (props) => {
	const { input, meta, child, ...restProps } = props;
	return (
		<FormControl {...props}>
			{" "}
			<input {...input} {...restProps} />
		</FormControl>
	);
};

export const Textarea = (props) => {
	const { input, meta, child, ...restProps } = props;
	return (
		<FormControl {...props}>
			{" "}
			<textarea {...input} {...restProps} />
		</FormControl>
	);
};

export const createField = (type, placeholder, name, validators, component, props = {}, text = "") => (
	<div>
		<Field
			type={type}
			placeholder={placeholder}
			name={name}
			component={component}
			validate={validators}
		/>
	</div>
);
