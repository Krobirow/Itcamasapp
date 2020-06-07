import { profilesApi } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

const EDIT_PROFILE_DESCRIPTION = 'EDIT_PROFILE_DESCRIPTION';

let initialState = {
	myPostData: [
		{ id: 1, postText: "It's my first post", likesCount: 34, dislikesCount: 5 },
		{ id: 2, postText: "Hi, how are you ?", likesCount: 3, dislikesCount: 0 }
	],
	profile: null,
	status: "",
	isFetching: false,
	editMode: false
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
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
		case DELETE_POST: 
			return {
				...state, 
				myPostData: state.myPostData.filter(p => p.id !== action.postId)
			}
		case SET_USER_PROFILE: 
			return {
				...state, profile: action.profile
			}
		case SET_STATUS:
			return {
				...state, status: action.status
			}
		case TOGGLE_IS_FETCHING : 
			return {
				...state, isFetching: action.isFetching
			}
		case SAVE_PHOTO_SUCCESS: 
			return {
				...state, profile: {...state.profile, photos: action.editedProfile}
			}
		case EDIT_PROFILE_DESCRIPTION: 
			return {
				...state, editMode: action.editMode
			}
		default:
			return state;
	}
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const isToggleFetchingProfile = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setStatus = (status) => ({type: SET_STATUS, status});

const saveProfileSuccess = (editedProfile) => ({type: EDIT_PROFILE_DESCRIPTION, editedProfile});

export const deletePost = (postId) => ({type: DELETE_POST, postId});

const savePhotoSuccess = (photos) =>  ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserStatus = userId =>  async dispatch => {
	let data =  await profilesApi.getStatus(userId);
	dispatch(setStatus(data));
};

export const getProfilePage = userId => async dispatch => {
		dispatch(isToggleFetchingProfile(true));
		
		let data =  await profilesApi.getProfile(userId)
			dispatch(isToggleFetchingProfile(false));
			dispatch(setUserProfile(data));
};

export const updateUserStatus = status => async dispatch =>{ 
	let data = await profilesApi.updateStatus(status);
	if (data.resultCode === 0) dispatch(setStatus(status));
};

export const savePhoto = file => async dispatch =>{ 
	let data = await profilesApi.savePhoto(file);
	if (data.resultCode === 0) dispatch(savePhotoSuccess(data.data.photos));
};

export const saveProfile = profile => async (dispatch, getState) =>{
	const userId = getState().auth.userId;
	let data = await profilesApi.saveProfile(profile);
	if (data.resultCode === 0) {
		dispatch(getProfilePage(userId))
	} else {
		let message = data.messages.length > 0 ? data.messages[0] : "One of the links is invalid";
		dispatch(stopSubmit("edit-profile", {_error : message}))
		return Promise.reject(data.messages[0]);
	}	
};

export default profileReducer;
