import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let {dialogsData, messagesData} = props;

	let dialogElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} />);
	let messageElements = messagesData.map( m => <Message message={m.message} id={m.id} />);

	return (
		<div className={s.dialogsWrap}>
			<div className={s.dialogsItem}>
				{dialogElements}
			</div>

			<div className={s.messages}>
				{messageElements}
			</div>
		</div>
	);
};

export default Dialogs;
