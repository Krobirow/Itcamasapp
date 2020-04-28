import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
	let dialogsData = [
		{ id: 1, name: "Dimych" },
		{ id: 2, name: "Andrey" },
		{ id: 3, name: "Eugenij" },
		{ id: 4, name: "Sasha" },
		{ id: 5, name: "Ania" },
		{ id: 6, name: "Vasya" },
		{ id: 7, name: "Maks" },
	];

	let messagesData = [
		{ id: 1, message: "How do You feel?" },
		{ id: 2, message: "How are You ?" },
		{ id: 3, message: "How are they?" },
		{ id: 4, message: "How could You ?" },
		{ id: 5, message: "How much You can ?" },
		{ id: 6, message: "How long is it ?" },
		{ id: 7, message: "Oh, Hi Mark!" },
	];

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
