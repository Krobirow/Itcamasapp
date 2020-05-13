import React from 'react';
import s from './profileInfo.module.css';
import Preloader from '../../Preloader/Preloader';


const ProfileInfo = (props) => {
	console.log(props);
	if(!props.profile) {
		return <Preloader />
	}

	return (
		<div className={s.profileInfo}>
			<div className={s.avatar}>
				<img src="https://cdn.pixabay.com/photo/2016/02/19/10/25/beach-1209229__340.jpg" alt="beach" />
			</div>
			<div className={s.avatarDescr}>
				<img src={props.profile.photos.large} alt="ava" />
				ava + descr
			</div>
		</div>
	);
}

export default ProfileInfo;