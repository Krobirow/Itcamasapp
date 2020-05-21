import React, { Component } from "react";
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, isToggleFetching } from '../../redux/userReducer';

import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { usersApi } from "../../api/api";


class UsersContainer extends Component {
	componentDidMount() {
		this.props.isToggleFetching(true);

		usersApi.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
				this.props.isToggleFetching(false);
				this.props.setUsers(data.items);
				this.props.setUsersTotalCount(data.totalCount);
			});
	}

	onPageChanger = (pageNumber) => {
		this.props.isToggleFetching(true);
		this.props.setCurrentPage(pageNumber)
		usersApi.getUsers(pageNumber, this.props.pageSize).then((data) => {
				this.props.isToggleFetching(false);
				this.props.setUsers(data.items);
			});
	}
	onUnfollowed = (userId) => {
		usersApi.onUnfollow(userId).then(data => {
			if (data.resultCode === 0) {
				unfollow(userId);
			}
		})
	}

	onFollowed = (userId) => {
		usersApi.onFollow(userId).then(data => {
			if (data.resultCode === 0) {
				follow(userId);
			}
		})
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users totalUsersCount={this.props.totalUsersCount} 
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanger={this.onPageChanger}
					users={this.props.users}
					onFollowed={this.onFollowed}
					onUnfollowed={this.onUnfollowed}
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
		isFetching: state.usersPage.isFetching
	}
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, isToggleFetching})(UsersContainer);