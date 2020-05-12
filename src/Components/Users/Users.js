import React, { Component } from "react";
import s from "./users.module.css";
import * as axios from "axios";

class Users extends Component {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then((response) => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanger = (pageNumber) => {
		this.props.setPage(pageNumber)
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then((response) => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return (
			<div>

				<div>
					{pages.map(page => {
						return <span onClick={(e) => {this.onPageChanger(page);}} className={this.props.currentPage === page && s.selectedPage}>{page}</span>
					})}
				</div>
	
				{this.props.users.map((u) => (
					<div key={u.id}>
						<span>
							<div className={s.users__immageWrapp}>
								<img
									src={
										u.photos.small != null
											? u.photos.small
											: "https://wallpapercave.com/wp/PCG5mFl.jpg"
									}
									alt="ava"
								/>
							</div>
							<div>
								{u.followed ? (
									<button
										onClick={() => {
											this.props.unfollow(u.id);
										}}
									>
										Follow
									</button>
								) : (
									<button
										onClick={() => {
											this.props.follow(u.id);
										}}
									>
										Unfollow
									</button>
								)}
							</div>
						</span>
						<span>
							<span>
								<div>{u.name}</div>
								<div>{u.status}</div>
							</span>
							<span>
								<div>{"u.location.country"}</div>
								<div>{"u.location.city"}</div>
							</span>
						</span>
					</div>
				))}
			</div>
		);
	}
}

export default Users;
