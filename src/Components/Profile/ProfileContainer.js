import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfilePage, getUserStatus, updateUserStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import Preloader from '../common/Preloader/Preloader';
class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = this.props.authorizedUserId;
			if(!userId) {
				this.props.history.push("/login");
			}
		}
		this.props.getProfilePage(userId);

		this.props.getUserStatus(userId);
	}
	render() {
		return (
			<div>
				{this.props.isFetching 
					? <Preloader /> 
					: <Profile {...this.props} 
						profile={this.props.profile} 
						status={this.props.status} 
						updateUserStatus={this.props.updateUserStatus} />}
				</div>
			)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	isFetching: state.profilePage.isFetching,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
});

export default compose(
	connect(mapStateToProps, {getProfilePage, getUserStatus, updateUserStatus}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);