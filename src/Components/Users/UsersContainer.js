import React, { Component } from "react";
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, isToggleFetching } from '../../redux/userReducer';

import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends Component {
	componentDidMount() {
		this.props.isToggleFetching(true);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
				withCredentials: true,
			})
			.then((response) => {
				this.props.isToggleFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setUsersTotalCount(response.data.totalCount);
			});
	}

	onPageChanger = (pageNumber) => {
		this.props.isToggleFetching(true);
		this.props.setCurrentPage(pageNumber)
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
				withCredentials: true,
			})
			.then((response) => {
				this.props.isToggleFetching(false);
				this.props.setUsers(response.data.items);
			});
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
					follow={this.props.follow}
					unfollow={this.props.unfollow}
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