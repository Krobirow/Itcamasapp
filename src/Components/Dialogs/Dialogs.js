import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let {state} = props
	let {dialogsData, messagesData} = state;

	let dialogElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} key={d.id} ava={d.ava}/>);
	let messageElements = messagesData.map( (m, index) => {
		if (index % 2 === 0) {
			return (<span className={s.messageLeft} key={m.id}><Message message={m.message} id={m.id} key={m.id} ava={m.ava}/></span>);
		} else {
			return (<span className={s.messageRight} key={m.id}><Message message={m.message} id={m.id} key={m.id} ava={m.ava}/></span>);
		}
	});

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
