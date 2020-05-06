import React from "react";

import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';



let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addMessageActionCreator: () => {
			dispatch(addMessageActionCreator());
		},
		updateNewMessageTextActionCreator: (text) => {
			let action = updateNewMessageTextActionCreator(text)
			dispatch(action);
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
