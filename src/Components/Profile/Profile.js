import React from 'react';
import s from './profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
	return (
		<div className={s.profileWrap}>
			<ProfileInfo savePhoto={props.savePhoto} 
			saveProfile={props.saveProfile}
			isOwner={props.isOwner} 
			profile={props.profile} 
			status={props.status} 
			updateUserStatus={props.updateUserStatus}/>
			<MyPostsContainer/>
		</div>
	);
}

export default Profile;