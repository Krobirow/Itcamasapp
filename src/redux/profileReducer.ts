import { BaseThunkType, InferActionTypes } from './redux-store';
import { profilesApi } from "../api/profilesApi";
import { FormAction, stopSubmit } from "redux-form";
import { MyPostDataElType, PhotosInterf, ProfileTypeDataEl } from "./types";
import { ResultCodesEnum } from './enums';

const initialState = {
	newPostText: "",
	myPostData: [
		{ id: 1, postText: "It's my first post", likesCount: 34, dislikesCount: 5 },
		{ id: 2, postText: "Hi, how are you ?", likesCount: 3, dislikesCount: 0 }
	] as Array<MyPostDataElType>,
	profile: null as ProfileTypeDataEl | null,
	status: "",
	isFetching: false,
	editMode: false
}

const profileReducer = (state = initialState, action: ActionsTypes): InitProfileReducType => {
	switch (action.type) {
		case ProfileActionsNames.ADD_POST:
			return {
				...state,
				myPostData: [
					...state.myPostData,
					{
						id: state.myPostData.length + 1,
						postText: action.newPostText,
						likesCount: 21,
						dislikesCount: 2,
					}
				],
			};
		case ProfileActionsNames.DELETE_POST: 
			return {
				...state, 
				myPostData: state.myPostData.filter(p => p.id !== action.postId)
			}
		case ProfileActionsNames.SET_USER_PROFILE: 
			return {
				...state, profile: action.profile
			}
		case ProfileActionsNames.SET_STATUS:
			return {
				...state, status: action.status
			}
		case ProfileActionsNames.TOGGLE_IS_FETCHING : 
			return {
				...state, isFetching: action.isFetching
			}
		case ProfileActionsNames.SAVE_PHOTO_SUCCESS: 
			return {
				...state, profile: {...state.profile, photos: action.photos} as ProfileTypeDataEl
			}
		default:
			return state;
	}
}

export const profileActions = {
	addPost: (newPostText: string) => ({type: ProfileActionsNames.ADD_POST, newPostText} as const),
	deletePost: (postId: number) => ({type: ProfileActionsNames.DELETE_POST, postId} as const),
	setUserProfile: (profile : ProfileTypeDataEl) => ({type: ProfileActionsNames.SET_USER_PROFILE, profile} as const),
	isToggleFetchingProfile: (isFetching: boolean) => ({type: ProfileActionsNames.TOGGLE_IS_FETCHING, isFetching} as const),
	setStatus: (status: string) => ({type: ProfileActionsNames.SET_STATUS, status} as const),
	_savePhotoSuccess: (photos: PhotosInterf) =>  ({type: ProfileActionsNames.SAVE_PHOTO_SUCCESS, photos} as const),
}

export const addPostAC = (newPostText: string): ProfileThunkType => async (dispatch) => {
	dispatch(profileActions.addPost(newPostText))
}

export const deletePostAC = (postId: number): ProfileThunkType => async (dispatch) => {
	dispatch(profileActions.deletePost(postId))
}

export const getUserStatus = (userId: number): ProfileThunkType => async (dispatch) => {
	const data =  await profilesApi.getStatus(userId);
	dispatch(profileActions.setStatus(data));
}

export const getProfilePage = (userId: number | null): ProfileThunkType => async (dispatch) => {
	dispatch(profileActions.isToggleFetchingProfile(true));
	const data =  await profilesApi.getProfile(userId)
	dispatch(profileActions.isToggleFetchingProfile(false));
	dispatch(profileActions.setUserProfile(data));
}

export const updateUserStatus = (status: string): ProfileThunkType => async (dispatch) => { 
	const data = await profilesApi.updateStatus(status);
	if (data.resultCode === ResultCodesEnum.Success) dispatch(profileActions.setStatus(status));
}

export const savePhoto = (file: File): ProfileThunkType => async (dispatch) => { 
	const data = await profilesApi.savePhoto(file);
	if (data.resultCode === ResultCodesEnum.Success) dispatch(profileActions._savePhotoSuccess(data.data.photos));
}

export const saveProfile = (profile: ProfileTypeDataEl): ProfileThunkTypeWithReduxForm => async (dispatch, getState) =>{
	const userId = getState().auth.userId;
	const data = await profilesApi.saveProfile(profile);
	if (data.resultCode === ResultCodesEnum.Success) {
		if (userId) dispatch(getProfilePage(userId))
		else throw new Error("UserID can't be null")
	} else {
		const message = data.messages.length > 0 ? data.messages[0] : "One of the links is invalid";
		dispatch(stopSubmit("edit-profile", {_error : message}))
		return Promise.reject(data.messages[0]);
	}
}

export default profileReducer

enum ProfileActionsNames {
	ADD_POST = 'SN/PROFILE/ADD_POST',
	SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE',
	SET_STATUS = 'SN/PROFILE/SET_STATUS',
	DELETE_POST = 'SN/PROFILE/DELETE_POST',
	TOGGLE_IS_FETCHING = 'SN/PROFILE/TOGGLE_IS_FETCHING',
	SAVE_PHOTO_SUCCESS = 'SN/PROFILE/SAVE_PHOTO_SUCCESS',
}

export type InitProfileReducType = typeof initialState
type ActionsTypes = InferActionTypes<typeof profileActions>
type ProfileThunkType = BaseThunkType<ActionsTypes>
export type ProfileThunkTypeWithReduxForm = BaseThunkType<ActionsTypes | FormAction>
