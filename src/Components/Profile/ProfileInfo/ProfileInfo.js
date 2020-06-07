import React, { useState, useEffect } from 'react';
import s from './profileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import avatar from '../../../assets/profilePic.jpg'
import ProfileDataFormReduxForm from './ProfileDataForm';


const ProfileInfo = ({profile, status, isOwner, updateUserStatus, savePhoto, saveProfile}) => {
	let [ editMode, setEditMode]= useState(false);


	if(!profile) {return <Preloader />}
	const onSubmit =  formData => {
		saveProfile(formData).then(()=> setEditMode(false))
	};

	const onMainPhotoSelected = (e) => {
		if(e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	return <div className={s.profileInfo}>
			<div className={s.avatar}>
				<img src={profile.photos.large ? avatar : null} alt="ava" />
				<div className={s.statusInfo}>
					<div> <span> <b>{profile.fullName} </b></span></div>
					<ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
				</div>
			</div>
			<div>
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
			</div>
			{ editMode
				? <ProfileDataFormReduxForm 
					onSubmit={onSubmit} 
					profile={profile} 
					initialValues={profile}/> 
				: <ProfileData 
					goToEditMode={() => {setEditMode(true)}} 
					profile={profile} 
					isOwner={isOwner}/> 
			}
		</div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
	return (
		<div className={s.profileData}>
			{isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
			<div> <span> <b> Full name : {profile.fullName} </b></span></div>
			<div> <span> <b> Looking for a job : {profile.lookingForAJob ? "Yes" : "No"} </b></span></div>
			<div><span> <b>My professional skills: {profile.lookingForAJobDescription}</b></span></div>
			<div><span><b>About Me: {profile.aboutMe}</b></span></div>
			<span className={s.contactsSpan}>Contacts: </span> 
			<div className={s.contactsWrapper}>
				{Object.keys(profile.contacts).map(key => {
					return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
				})}
			</div>
		</div>
	)
}



export const Contacts = ({contactTitle, contactValue}) => {
	return <li><b><a href={contactValue} rel="noopener noreferrer" target="_blank">{contactTitle}</a></b></li>
}

export default ProfileInfo;