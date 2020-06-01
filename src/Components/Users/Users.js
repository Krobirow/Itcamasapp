import React from 'react';
import s from './users.module.css';
import Paginator from './Paginator/Paginator';
import User from './User';

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanger, users, followingInProgress, unFollow, follow, ...props}) => {

	return (
		<div className={s.usersWprapper}>
			<Paginator currentPage={currentPage} onPageChanger={onPageChanger} totalUsersCount={totalUsersCount} pageSize={pageSize} />
			{users.map(u => <User followingInProgress={followingInProgress} 
				user={u}
				key={u.id}
				unFollow={unFollow}
				follow={follow} />
			)}
		</div>
	);
};

export default Users;
