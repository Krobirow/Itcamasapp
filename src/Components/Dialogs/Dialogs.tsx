import React, { FC } from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, Textarea } from "../common/FormsControls/FormsControls";
import { required, maxlengthCreator } from "../../utils/validators/validators";
import { PostDataElType } from "../../redux/types";
import { MessagesDataEl } from "../../redux/types";

type FormValueType = { newMessageText: string }
type FormValueKeysType = Extract<keyof FormValueType, string>

const maxLength = maxlengthCreator(100);

const DialogsForm: React.FC<InjectedFormProps<FormValueType>> = ({ handleSubmit }) => {
    return (
			<form onSubmit={handleSubmit} className={s.form} action="">
				<div>
					{createField<FormValueKeysType>(undefined, "write Your message", "newMessageText", [required, maxLength], Textarea)}
				</div>
				<div>
					<button type="submit">Add post</button>
				</div>
			</form>
    )
}

const DialogsReduxForm = reduxForm<FormValueType>({ form: "addPost" })(DialogsForm);

type DialogsProps = {
	dialogsData: PostDataElType[];
	messagesData: MessagesDataEl[];
	addMessageAC: (newText: string) => void
}

const Dialogs: FC<DialogsProps> = ({ dialogsData, messagesData, addMessageAC }) => {
	const dialogElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} key={d.id} ava={d.ava}/>);

	const addNewMessage = (formData: FormValueType): void => {
		// console.log(formData.newMessageText);
		addMessageAC(formData.newMessageText);
	};

	return(
		<div className={s.dialogsWrap}>
			<div className={s.dialogsItem}>
				{dialogElements}
			</div>

			<div className={s.messages}>
				<Message messagesData={messagesData}/>
				<div className={s.dialogsFormWraper}>
					<DialogsReduxForm onSubmit={addNewMessage} />
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
