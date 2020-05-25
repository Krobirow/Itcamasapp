import { addMessage, updateNewMessageText } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from "redux";

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

// прототип создания ХОК, логика которая выносится в отдельную функцию с классом
// внутри себя

// let AuthRedirectComponent = props => {
// 	if (!props.isAuth) return <Redirect to={"/login"} />;
// 	return <Dialogs {...props} />
// }

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

export default compose(
	connect(mapStateToProps, {addMessage, updateNewMessageText}),
	withAuthRedirect
)(Dialogs);
