import React from 'react';
import s from './profileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile, status, updateUserStatus}) => {
	if(!profile) return <Preloader />

	return <div className={s.profileInfo}>
			<div className={s.avatarDescr}>
				<img src={profile.photos.large ? profile.photos.large : 'https://wallpapercave.com/wp/PCG5mFl.jpg'} alt="ava" />
				<div>
					<ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
				</div>
				
			</div>
		</div>
}

export default ProfileInfo;