import React from 'react';
import s from './users.module.css';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/profilePic.jpg'

const User = ({user, followingInProgress, unFollow, follow}) => {
	return (
		<div>
				<div key={user.id}>
					<span>
						<div className={s.users__immageWrapp}>
							<NavLink to={'/profile/' + user.id}>
								<img
									src={
										user.photos.small != null
											? user.photos.small
											: avatar
									}
									alt='ava'
								/>
							</NavLink>
						</div>
						<div>
							{user.followed ? (
								<button disabled={followingInProgress.some(id => id === user.id)}
									onClick={() => { unFollow(user.id); }}>
									Follow
								</button>
							) : (
								<button disabled={followingInProgress.some(id => id === user.id)}
									onClick={() =>  { follow(user.id); }}>
									Unfollow
								</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{user.name}</div>
							<div>{user.status}</div>
						</span>
						<span>
							<div>{'u.location.country'}</div>
							<div>{'u.location.city'}</div>
						</span>
					</span>
				</div>
		</div>
    )
}


export default User;
