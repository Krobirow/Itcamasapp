import React from "react";

import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
	// let state = props.store.getState().dialogsPage;


	// let addMessage = () => {
	// 	props.store.dispatch(addMessageActionCreator());
	// }

	// let onMesageChange = (text) => {
	// 	props.store.dispatch(updateNewMessageTextActionCreator(text));
	// }
	return (
		<StoreContext.Consumer> 
		{
			(store) => {
				let state = store.getState().dialogsPage;


				let addMessage = () => {
					store.dispatch(addMessageActionCreator());
				}

				let onMesageChange = (text) => {
					store.dispatch(updateNewMessageTextActionCreator(text));
				}
				return (<Dialogs dialogsPage={state} updateNewMessageTextActionCreator={onMesageChange} addMessageActionCreator={addMessage} />);
			}
		}
		</StoreContext.Consumer>
	)
};

export default DialogsContainer;
