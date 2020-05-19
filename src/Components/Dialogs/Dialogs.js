import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogElements = state.dialogsData.map( d => <DialogItem name={d.name} id={d.id} key={d.id} ava={d.ava}/>);

	let addMessage = () => {
		props.addMessage();
	}
	
	let onMesageChange = (e) => {
		let text = e.target.value;
		props.updateNewMessageText(text);
	}

	return(
		<div className={s.dialogsWrap}>
			<div className={s.dialogsItem}>
				{dialogElements}
			</div>

			<div className={s.messages}>
				<Message messagesData={state.messagesData}/>
				<div>
					<textarea placeholder='Enter Your message' onChange={onMesageChange} value={state.newMessageText} name="newPost" cols="20" rows="5"></textarea>
				</div>
				<div>
					<button onClick={addMessage} type="button">Add post</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
