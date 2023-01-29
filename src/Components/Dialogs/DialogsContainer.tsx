import { addMessageAC, DialogsReducType } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { ComponentClass } from "react";

const mapStateToProps = (state: AppStateType): DialogsReducType => { 
	return {
		dialogsData: state.dialogsPage.dialogsData,
		messagesData: state.dialogsPage.messagesData,
	}
}

export default compose<ComponentClass<DialogsReducType & Record<string, never>, Record<string, never>>>(
	withAuthRedirect,
	connect<DialogsReducType, MapDispatchPropsType, Record<string, never>, AppStateType>(mapStateToProps, { addMessageAC }),
)(Dialogs)

type MapDispatchPropsType = { addMessageAC: (newMessageText: string) => void }