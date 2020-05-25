import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfilePage, getUserStatus, updateUserStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if(!userId) userId = 2;
		this.props.getProfilePage(userId);

		this.props.getUserStatus(userId);
	}
	render() {
		return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status
});

export default compose(
	connect(mapStateToProps, {getProfilePage, getUserStatus, updateUserStatus}),
	withRouter,
	// withAuthRedirect
)(ProfileContainer);