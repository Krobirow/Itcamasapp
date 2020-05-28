import React from 'react';
import s from './profileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'


const ProfileInfo = props => {
	if(!props.profile) return <Preloader />

	return <div className={s.profileInfo}>
			<div className={s.avatarDescr}>
				<img src={props.profile.photos.large ? props.profile.photos.large : 'https://wallpapercave.com/wp/PCG5mFl.jpg'} alt="ava" />
				<div>
					<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
				</div>
				
			</div>
		</div>
}

export default ProfileInfo;