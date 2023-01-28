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

export default compose(
	withAuthRedirect,
	connect<DialogsReducType & WithAuthRedirectPropsTypes, MapDispatchPropsType, Record<string, never>, AppStateType>(mapStateToProps, { addMessageAC }),
)(Dialogs) as ComponentClass<DialogsReducType & WithAuthRedirectPropsTypes & Record<string, never>, Record<string, never>>;

type MapDispatchPropsType = { addMessageAC: (newMessageText: string) => void }