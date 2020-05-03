import React from 'react';
import s from './profile.module.css';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

	let {profilePage, addPost, updateNewPostText} = props
	let {myPostData, newPostText} = profilePage;
	return (
		<section className={s.profileWrap}>
			<ProfileInfo />
			<MyPosts newPostText={newPostText} 
				myPostData={myPostData} 
				addPost={addPost}
				updateNewPostText={updateNewPostText}
			/>
		</section>
	);
}

export default Profile;