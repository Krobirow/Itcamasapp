import React, { ComponentType, PureComponent } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfilePage, getUserStatus, updateUserStatus, savePhoto, saveProfile } from '../../redux/profileReducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import Preloader from '../common/Preloader/Preloader';
import { AppStateType } from '../../redux/redux-store';
import { ProfileACTypes, ProfileTypeDataEl } from '../../redux/types';

class ProfileContainer extends PureComponent<DefProps> {

	refreshProfile() {
		let userId = +this.props.match.params.userId;
		if(!userId) {
			if(this.props.authorizedUserId) userId = +this.props.authorizedUserId;
			else this.props.history.push("/login");
		}
		this.props.getProfilePage(+userId);

		this.props.getUserStatus(+userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps: DefProps) {
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	isFetching: state.profilePage.isFetching,
	authorizedUserId: state.auth.userId,
});


export default compose(
	withRouter,
	withAuthRedirect,
	connect<MapStateToPropsType, MapDispatchPropsType, Record<string, never>, AppStateType>(
		mapStateToProps,
		{getProfilePage, getUserStatus, updateUserStatus, savePhoto, saveProfile}
	),
)(ProfileContainer) as ComponentType;

interface MapDispatchPropsType extends ProfileACTypes {
	getProfilePage: (userId: number) => void,
	getUserStatus: (userId: number) => void,
}

type PathParamsType = { userId: string }
interface MapStateToPropsType {
	profile: ProfileTypeDataEl | null;
	status: string;
	isFetching: boolean;
	authorizedUserId: number | null
}

type DefProps = MapStateToPropsType & RouteComponentProps<PathParamsType> & MapDispatchPropsType
