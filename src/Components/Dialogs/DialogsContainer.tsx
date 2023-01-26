import { addMessageAC, DialogsReducType } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import { withAuthRedirect, WithAuthRedirectPropsTypes } from '../hoc/WithAuthRedirect';
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { ComponentClass } from "react";


const mapStateToProps = (state: AppStateType): DialogsReducType & WithAuthRedirectPropsTypes => { 
	return {
		dialogsData: state.dialogsPage.dialogsData,
		messagesData: state.dialogsPage.messagesData,
		isAuth: state.auth.isAuth,
	}
}

type MapDispatchPropsType = {
	addMessageAC: (newMessageText: string) => void
}

// прототип создания ХОК, логика которая выносится в отдельную функцию с классом
// внутри себя

// let AuthRedirectComponent = props => {
// 	if (!props.isAuth) return <Redirect to={"/login"} />;
// 	return <Dialogs {...props} />
// }

// функциональный вариант передачи колбеков и екшенов
// const mapDispatchToProps = (dispatch: DialogsThunkType): MapDispatchToPropsType => {
// 	return {
// 		addMessage: (newMessageText: string) => {
// 			dispatch(dialogsActions.addMessage(DialogsReducEnums.ADD_MESSAGE, newMessageText));
// 		}
// 	}
// }

export default compose(
	withAuthRedirect,
	connect<DialogsReducType & WithAuthRedirectPropsTypes, MapDispatchPropsType, Record<string, never>, AppStateType>(mapStateToProps, { addMessageAC }),
)(Dialogs) as ComponentClass<DialogsReducType & WithAuthRedirectPropsTypes & Record<string, never>, Record<string, never>>;
