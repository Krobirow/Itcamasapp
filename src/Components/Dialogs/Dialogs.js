import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
	return (
		<div className={s.dialogsWrap}>
			<div className={s.dialogsItem}>
				<DialogItem name="Andrey" id="1" />
				<DialogItem name="Eugenij" id="2" />
				<DialogItem name="Sasha" id="3" />
				<DialogItem name="Ania" id="4" />
				<DialogItem name="Vasya" id="5" />
				<DialogItem name="Igor" id="6" />
				<DialogItem name="Maks" id="7" />
			</div>
			
			<div className={s.messages}>
				<Message message="How do You feel?" />
				<Message message="How are You ?" />
				<Message message="How are they?" />
				<Message message="How could You ?" />
				<Message message="How much You can ?" />
				<Message message="How long is it ?" />
				<Message message="Oh, Hi Mark!" />
			</div>
		</div>
	);
};

export default Dialogs;
