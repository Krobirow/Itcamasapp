import { addMessage, updateNewMessageText } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

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

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(AuthRedirectComponent);

export default DialogsContainer;
