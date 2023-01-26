import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import {startLogout} from '../../redux/authReducer';
import { AppStateType } from '../../redux/redux-store';

export type HeaderMapStateToPropsType = {
	isAuth: boolean,
	login: string | null
}

export type HeaderMapDispatchToPropsType = {
	startLogout: () => void
}

class HeaderContainer extends PureComponent<HeaderMapStateToPropsType & HeaderMapDispatchToPropsType, Record<string, never>> {
	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state: AppStateType): HeaderMapStateToPropsType => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});

export default connect<HeaderMapStateToPropsType, HeaderMapDispatchToPropsType, Record<string, never>, AppStateType>(mapStateToProps, {startLogout})(HeaderContainer);
