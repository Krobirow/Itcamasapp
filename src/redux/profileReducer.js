import { profilesApi } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	myPostData: [
		{ id: 1, postText: "It's my first post", likesCount: 34, dislikesCount: 5 },
		{ id: 2, postText: "Hi, how are you ?", likesCount: 3, dislikesCount: 0 }
	],
	profile: null,
	status: ""
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
		case SET_USER_PROFILE: 
			return {
				...state, profile: action.profile
			}
		case SET_STATUS:
			return {
				...state, status: action.status
			}
		default:
			return state;
	}
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserStatus = userId =>  dispatch => profilesApi.getStatus(userId).then(data => dispatch(setStatus(data)))
export const getProfilePage = userId => dispatch => profilesApi.getProfile(userId).then(data => dispatch(setUserProfile(data)));

export const updateUserStatus = status =>  dispatch => profilesApi.updateStatus(status).then(data => {if (data.resultCode === 0) dispatch(setStatus(status))})

export default profileReducer;
