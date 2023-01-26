import React, { PureComponent } from "react";
import { connect } from 'react-redux';

import {getUsers, follow, unFollow, InitStateOfUserReducerType } from '../../redux/userReducer';
import Users from "./Users";
import {getFromStateUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/usersSelector";
import { AppStateType } from "../../redux/redux-store";


interface MapDispatchPropsType {
	unFollow: (userId: number) => void,
	follow: (userId: number) => void,
	getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends PureComponent<InitStateOfUserReducerType & MapDispatchPropsType> {
	componentDidMount() {
		const {currentPage, pageSize, getUsers} = this.props;
		getUsers(currentPage, pageSize);
	}
	onPageChanger = (pageNumber: number) => {
		const {pageSize, getUsers} = this.props;
		getUsers(pageNumber, pageSize)
	}

	render() {
		const { totalUsersCount, pageSize, currentPage, isFetching, users, follow, unFollow, followingInProgress, } = this.props;
		return (
			<Users totalUsersCount={totalUsersCount} 
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChanger={this.onPageChanger}
				isFetching={isFetching}
				users={users}
				follow={follow}
				unFollow={unFollow}
				followingInProgress={followingInProgress}
			/>
		)
	}
}


const mapStateToProps = (state: AppStateType): InitStateOfUserReducerType => {
	return {
		users: getFromStateUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default connect<InitStateOfUserReducerType, MapDispatchPropsType, Record<string, never>, AppStateType>(
	mapStateToProps,
	{follow, unFollow, getUsers}
)(UsersContainer);
