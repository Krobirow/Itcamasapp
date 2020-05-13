import { addMessage, updateNewMessageText } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

// функциональный вариант передачи колбеков и екшенов
// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		addMessageActionCreator: () => {
// 			dispatch(addMessageActionCreator());
// 		},
// 		updateNewMessageTextActionCreator: (text) => {
// 			let action = updateNewMessageTextActionCreator(text)
// 			dispatch(action);
// 		}
// 	}
// }

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;
