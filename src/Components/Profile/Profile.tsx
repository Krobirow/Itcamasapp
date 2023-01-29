import React from 'react';
import s from './profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileACTypes, ProfileTypeDataEl } from '../../redux/types';

const Profile:React.FC<ProfilePropsType & ProfileACTypes> = ({savePhoto, saveProfile, isOwner, profile, status, updateUserStatus}) => {
	return (
		<div className={s.profileWrap}>
			<ProfileInfo savePhoto={savePhoto} 
			saveProfile={saveProfile}
			isOwner={isOwner} 
			profile={profile} 
			status={status} 
			updateUserStatus={updateUserStatus}/>
			<MyPostsContainer/>
		</div>
	);
}

export default Profile;

type ProfilePropsType = {
	isOwner: boolean
	profile: ProfileTypeDataEl
	status: string
}