import React from 'react';
import s from "./users.module.css";
import { NavLink } from 'react-router-dom';

let Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		};

		return (
			<div>

				<div className={s.paginationWrapp}>
					{pages.map(page => {
						if(page <= 25) {
							return <span key={page} onClick={(e) => {props.onPageChanger(page);}} className={props.currentPage === page ? s.selectedPage : undefined}>{page}</span>
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
											: "https://wallpapercave.com/wp/PCG5mFl.jpg"
									}
									alt="ava"
								/>
							</NavLink>
							</div>
							<div>
								{u.followed ? (
									<button
										onClick={() => {
											props.unfollow(u.id);
										}}
									>
										Follow
									</button>
								) : (
									<button
										onClick={() => {
											props.follow(u.id);
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

export default Users;
