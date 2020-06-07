import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfilePage, getUserStatus, updateUserStatus, savePhoto, saveProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import Preloader from '../common/Preloader/Preloader';
class ProfileContainer extends Component {

	refreshProfile() {
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

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if(this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile();
		}
		
	}

	render() {
		if(!this.props.profile) return <Preloader />

		return (
			<div>
				{this.props.isFetching 
					? <Preloader /> 
					: <Profile {...this.props} 
						isOwner={!this.props.match.params.userId}
						profile={this.props.profile} 
						status={this.props.status} 
						savePhoto={this.props.savePhoto}
						saveProfile={this.props.saveProfile}
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
	isAuth: state.auth.isAuth,
});

export default compose(
	connect(mapStateToProps, {getProfilePage, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);