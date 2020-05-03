import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let {dialogsData, messagesData, newMessageText} = props.dialogsPage;

	let dialogElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} key={d.id} ava={d.ava}/>);

	let newMessageElement = React.createRef();

	let addMessage = () => {
		props.dispatch({type: 'addMessage'});
	}
	
	let onMesageChange = () => {
		let text = newMessageElement.current.value;
		props.dispatch({type: 'updateNewMessageText', newText: text});
	}

	return(
		<div className={s.dialogsWrap}>
			<div className={s.dialogsItem}>
				{dialogElements}
			</div>

			<div className={s.messages}>
				<Message messagesData={messagesData}/>
				<div>
					<textarea ref={newMessageElement} onChange={onMesageChange} value={newMessageText} name="newPost" cols="20" rows="5"></textarea>
				</div>
				<div>
					<button onClick={addMessage} type="button">Add post</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
