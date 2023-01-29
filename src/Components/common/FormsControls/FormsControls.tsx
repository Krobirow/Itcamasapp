import React, { PropsWithChildren } from "react";
import s from "./formControls.module.css";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "../../../utils/validators/validators";

type FormContrType = { meta: WrappedFieldMetaProps }

export const FormControl: React.FC<FormContrType & PropsWithChildren> = ({ meta: {touched, error}, children}) => {
	const hasError = touched && error;
	return (
		<div className={s.formControl + " " + (hasError ? s.error : "")}>
			{children}
			{hasError && <span>{error}</span>}
		</div>
	);
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
	const { input, meta, ...restProps } = props;
	return (
		<FormControl {...props} >
			{" "}
			<input {...input} {...restProps} />
		</FormControl>
	);
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
	const { input, meta, ...restProps } = props;
	return (
		<FormControl {...props}>
			{" "}
			<textarea {...input} {...restProps} />
		</FormControl>
	);
};


export function createField<FormKeysTypes extends string>(
		type: string | undefined, 
		placeholder: string | undefined, 
		name: FormKeysTypes, 
		validators: Array<FieldValidatorType>, 
		component: "input" | "textarea" | React.FC<WrappedFieldProps>,
		props = {}, text = ""
	) {
	return (
		<div>
			<Field
				type={type}
				placeholder={placeholder}
				name={name}
				component={component}
				validate={validators}
			/>
		</div>
	)
}
