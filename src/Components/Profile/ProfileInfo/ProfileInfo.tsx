import React, { useState, FC, ChangeEvent } from 'react';
import s from './profileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import avatar from '../../../assets/profilePic.jpg'
import ProfileDataFormReduxForm from './ProfileDataForm';
import { PhotosInterf, ProfileACTypes, ProfileFormType, ProfileTypeDataEl } from '../../../redux/types';

type ProfInfoProps = {
	profile: ProfileTypeDataEl, 
	status: string, 
	isOwner: boolean, 
}

type FormDataOfProfileType = ProfileFormType & {
	photos?: PhotosInterf
}

const ProfileInfo: FC<ProfInfoProps & ProfileACTypes> = ({profile, status, isOwner, updateUserStatus, savePhoto, saveProfile}) => {
	const [ editMode, setEditMode ] = useState(false);

	if(!profile) {return <Preloader />}
	const onSubmit = (values: FormDataOfProfileType) => {
		saveProfile(values).then(()=> setEditMode(false))
	};

	const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
		if(e?.target?.files?.length) {
			savePhoto(e.target.files[0]);
		}
	}

	return <div className={s.profileInfo}>
		<div className={s.avatar}>
			<img src={!profile?.photos?.large ? avatar : profile.photos.large} alt="ava" />
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

type ProfDataProps = {
	profile: ProfileTypeDataEl, 
	isOwner: boolean,
	goToEditMode: () => void
}
const ProfileData: FC<ProfDataProps> = ({profile, isOwner, goToEditMode}) => {
	return (
		<div className={s.profileData}>
			{isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
			<div> <span> <b> Full name : {profile.fullName} </b></span></div>
			<div> <span> <b> Looking for a job : {profile.lookingForAJob ? "Yes" : "No"} </b></span></div>
			<div><span> <b>My professional skills: {profile.lookingForAJobDescription}</b></span></div>
			<div><span><b>About Me: {profile.aboutMe}</b></span></div>
			<span className={s.contactsSpan}>Contacts: </span> 
			<div className={s.contactsWrapper}>
				{profile?.contacts && Object.keys(profile?.contacts).map(key => {
					return <Contacts key={key} contactTitle={key} contactValue={profile?.contacts?.[key]} />
				})}
			</div>
		</div>
	)
}


type ContactsProps = {
	contactTitle: string, 
	contactValue: string
}
export const Contacts: FC<ContactsProps> = ({contactTitle, contactValue}) => {
	return <li><b><a href={contactValue} rel="noopener noreferrer" target="_blank">{contactTitle}</a></b></li>
}

export default ProfileInfo;