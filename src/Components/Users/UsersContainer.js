import React, { Component } from "react";
import { connect } from 'react-redux';

import {unfollowSuccess, followSuccess, setCurrentPage, getUsers, follow, unFollow } from '../../redux/userReducer';
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";
import {getFromStateUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/usersSelector";
class UsersContainer extends Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChanger = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize)
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null }
				<Users totalUsersCount={this.props.totalUsersCount} 
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanger={this.onPageChanger}
					users={this.props.users}
					follow={this.props.follow}
					unFollow={this.props.unFollow}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		users: getFromStateUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default connect(mapStateToProps,{follow, unFollow, followSuccess, unfollowSuccess,
		setCurrentPage, getUsers}
)(UsersContainer);