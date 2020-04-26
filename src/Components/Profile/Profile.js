import React from 'react';
import s from './profile.module.css';

import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<section className={s.conten}>
			<div>
				<img src="https://cdn.pixabay.com/photo/2016/02/19/10/25/beach-1209229__340.jpg" alt="beach" />
			</div>
			<div className={s.avatarDescr}>
				ava + descr
        	</div>
			<MyPosts />
		</section>
	);
}

export default Profile;