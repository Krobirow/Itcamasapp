import React from 'react';
import s from './profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
	return (
		<section className={s.profileWrap}>
			<ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
			<MyPostsContainer/>
		</section>
	);
}

export default Profile;