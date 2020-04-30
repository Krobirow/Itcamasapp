import React from 'react';
import s from './profile.module.css';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	let {state} = props
	let {myPostData} = state;
	return (
		<section className={s.profileWrap}>
			<ProfileInfo />
			<MyPosts myPostData={myPostData}/>
		</section>
	);
}

export default Profile;