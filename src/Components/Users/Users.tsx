import React from 'react';
import s from './users.module.css';
import Paginator from './Paginator/Paginator';
import User from './User';
import Preloader from '../common/Preloader/Preloader';
import { InitStateOfUserReducerType } from '../../redux/userReducer';
import { UserType } from '../../redux/types';

interface UsersProps extends InitStateOfUserReducerType {
	unFollow: (userId: number) => void,
	follow: (userId: number) => void,
	onPageChanger: (pageNuumber: number) => void,
}

const Users: React.FC<UsersProps> = ({currentPage, totalUsersCount, pageSize, onPageChanger, users, isFetching, followingInProgress, unFollow, follow}) => {

	return (
		<div className={s.usersWprapper}>
			{isFetching ? <Preloader /> : null }
			<Paginator currentPage={currentPage} onPageChanger={onPageChanger} totalUsersCount={totalUsersCount} pageSize={pageSize} />
			{users.map((u: UserType) => <User followingInProgress={followingInProgress} 
				user={u}
				key={u.id}
				unFollow={unFollow}
				follow={follow} />
			)}
		</div>
	);
};

export default Users;
