import { profilesApi } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	myPostData: [
		{ id: 1, message: "It's my first post", likesCount: 34, dislikesCount: 5 },
		{ id: 2, message: "Hi, how are you ?", likesCount: 3, dislikesCount: 0 }
	],
	newPostText: "It-Camasutra",
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
						message: state.newPostText,
						likesCount: 21,
						dislikesCount: 2,
					}
				],
				newPostText: ''
			};
		case UPDATE_NEW_POST_TEXT: 
			return {
				...state,
				newPostText: action.newText
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

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserStatus = userId =>  dispatch => profilesApi.getStatus(userId).then(data => dispatch(setStatus(data)))

export const updateUserStatus = status =>  dispatch => profilesApi.updateStatus(status).then(data => {if (data.resultCode === 0) dispatch(setStatus(status))})



export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const getProfilePage = (userId) => (dispatch) => profilesApi.getProfile(userId).then(data => dispatch(setUserProfile(data)));

export default profileReducer;
