import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfilePage } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if(!userId) userId = 2;
		this.props.getProfilePage(userId);
	}
	render() {
		if (!this.props.isAuth) return <Redirect to={"/login"} />;
		return <Profile {...this.props} profile={this.props.profile}/>
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfilePage})(withUrlDataContainerComponent);