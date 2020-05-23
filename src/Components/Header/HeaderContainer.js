import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import {setAuthUserData, authorization} from '../../redux/authReducer';
class HeaderContainer extends Component {
	componentDidMount() {
		this.props.authorization();
	}

	render() {
		return <Header {...this.props} />
	}
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData, authorization})(HeaderContainer);
