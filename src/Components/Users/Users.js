import React from 'react';
import s from './users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from "axios";

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div>
			<div className={s.paginationWrapp}>
				{pages.map((page) => {
					if (page <= 25) {
						return (
							<span
								key={page}
								onClick={(e) => {
									props.onPageChanger(page);
								}}
								className={
									props.currentPage === page ? s.selectedPage : undefined
								}>
								{page}
							</span>
						);
					}
				})}
			</div>

			{props.users.map((u) => (
				<div key={u.id}>
					<span>
						<div className={s.users__immageWrapp}>
							<NavLink to={'/profile/' + u.id}>
								<img
									src={
										u.photos.small != null
											? u.photos.small
											: 'https://wallpapercave.com/wp/PCG5mFl.jpg'
									}
									alt='ava'
								/>
							</NavLink>
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										axios
											.delete(
												`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
												{
													withCredentials: true,
													headers: {
														"API-KEY": "ce8d3114-35d1-4bb0-897f-c280453767ef"
													}
												}
											)
											.then((response) => {
												if (response.data.resultCode == 0) {
													props.unfollow(u.id);
												}
											});
									}}>
									Follow
								</button>
							) : (
								<button
									onClick={() => {
										axios
											.post(
												`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
												{
													withCredentials: true,
													headers: {
														"API-KEY": "ce8d3114-35d1-4bb0-897f-c280453767ef"
													}
												}
											)
											.then((response) => {
												if (response.data.resultCode == 0) {
													props.follow(u.id);
												}
											});

										
									}}>
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
							<div>{'u.location.country'}</div>
							<div>{'u.location.city'}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	);
};

export default Users;
