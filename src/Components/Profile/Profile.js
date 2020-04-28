import React from 'react';
import s from './profile.module.css';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
	return (
		<section className={s.profileWrap}>
			<ProfileInfo />
			<MyPosts />
		</section>
	);
}

export default Profile;