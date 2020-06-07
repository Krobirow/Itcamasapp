import React from 'react';
import s from './profileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import avatar from '../../../assets/profilePic.jpg'


const ProfileInfo = ({profile, status, isOwner, updateUserStatus, savePhoto}) => {
	if(!profile) return <Preloader />

	const onMainPhotoSelected = (e) => {
		if(e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	return <div className={s.profileInfo}>
			<div className={s.avatar}>
				<img src={profile.photos.large || avatar} alt="ava" />
				
				<div>
					<ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
				</div>
				
			</div>
			<div>
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
			</div>
		</div>
}

export default ProfileInfo;