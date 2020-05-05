import React from 'react';
import s from './profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
	return (
		<section className={s.profileWrap}>
			<ProfileInfo />
			<MyPostsContainer 
			// store={props.store}
			/>
		</section>
	);
}

export default Profile;