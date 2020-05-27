import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxlengthCreator } from "../../utils/validators/validators";

const maxLength = maxlengthCreator(100);

const DialogsForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form} action="">
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

const DialogsReduxForm = reduxForm({ form: "addPost" })(DialogsForm);

const Dialogs = (props) => {
	let state = props.dialogsPage;
	let dialogElements = state.dialogsData.map( d => <DialogItem name={d.name} id={d.id} key={d.id} ava={d.ava}/>);

	const addNewMessage = (values) => {
		console.log(values.newMessageText);
		props.addMessage(values.newMessageText);
	};

	if (!props.isAuth) return <Redirect to={"/login"} />;

	return(
		<div className={s.dialogsWrap}>
			<div className={s.dialogsItem}>
				{dialogElements}
			</div>

			<div className={s.messages}>
				<Message messagesData={state.messagesData}/>
				<div className={s.dialogsFormWraper}>
					<DialogsReduxForm onSubmit={addNewMessage} />
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
