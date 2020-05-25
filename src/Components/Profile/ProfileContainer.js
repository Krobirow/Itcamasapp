import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfilePage } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if(!userId) userId = 2;
		this.props.getProfilePage(userId);
	}
	render() {
		return <Profile {...this.props} profile={this.props.profile}/>
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
});

export default compose(
	connect(mapStateToProps, {getProfilePage}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);