import React, { Component } from "react";
import { connect } from 'react-redux';

import {unfollowSuccess, followSuccess, setCurrentPage, getUsers, follow, unFollow } from '../../redux/userReducer';
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";
import { withAuthRedirect } from "../hoc/WithAuthRedirect";
import { compose } from "redux";
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
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

export default compose(
	connect(mapStateToProps,{follow, unFollow, followSuccess, unfollowSuccess,
		setCurrentPage, getUsers}),
	withAuthRedirect
)(UsersContainer);