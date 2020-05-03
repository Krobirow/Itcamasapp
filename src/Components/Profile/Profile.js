import React from 'react';
import s from './profile.module.css';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	let {profilePage, dispatch} = props
	let {myPostData, newPostText} = profilePage;
	return (
		<section className={s.profileWrap}>
			<ProfileInfo />
			<MyPosts newPostText={newPostText} 
				myPostData={myPostData} 
				dispatch={dispatch}
			/>
		</section>
	);
}

export default Profile;