import React from "react";

import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPage;


	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}
	
	let onMesageChange = (text) => {
		props.store.dispatch(updateNewMessageTextActionCreator(text));
	}

	return( <Dialogs dialogsPage={state} updateNewMessageTextActionCreator={onMesageChange} addMessageActionCreator={addMessage}/>);
};

export default DialogsContainer;