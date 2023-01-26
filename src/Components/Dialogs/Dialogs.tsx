import React, { FC } from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxlengthCreator } from "../../utils/validators/validators";
import { PostDataElType } from "../../redux/types";
import { MessagesDataEl } from "../../redux/dialogsReducer";

type FormValueType = { newMessageText: string }

const maxLength = maxlengthCreator(100);

const DialogsForm: React.FC<InjectedFormProps<FormValueType>> = ({ handleSubmit }) => {
    return (
			<form onSubmit={handleSubmit} className={s.form} action="">
				<div>
					<Field component={Textarea}
						name={"newMessageText"}
						placeholder={"write Your message"}
						validate={[required, maxLength]} 
					/>
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
	isAuth: boolean
}

const Dialogs: FC<DialogsProps> = ({ isAuth, dialogsData, messagesData, addMessageAC }) => {
	const dialogElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} key={d.id} ava={d.ava}/>);

	const addNewMessage = (formData: FormValueType): void => {
		console.log(formData.newMessageText);
		addMessageAC(formData.newMessageText);
	};

	if (!isAuth) return <Redirect to={"/login"} />;

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
