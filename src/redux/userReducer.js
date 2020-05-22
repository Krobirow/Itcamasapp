import { usersApi } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
	users: [ ],
	pageSize: 5,
	totalUsersCount: 21,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [2, 3]
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: 
			return {
				...state, 
				users: state.users.map(u => {
					if(u.id === action.userId) {
						return {...u, followed: true}
					}
					return u;
				})
			}

		case UNFOLLOW: 
			return {
				...state, 
				users: state.users.map(u => {
					if(u.id === action.userId) {
						return {...u, followed: false}
					}
					return u;
				})
			}

		case SET_USERS: 
			return {...state, users: action.users};

		case SET_CURRENT_PAGE: 
			return {
				...state, currentPage: action.currentPage
			}

		case SET_USERS_TOTAL_COUNT: 
			return {
				...state, totalUsersCount: action.totalCount
			}

		case TOGGLE_IS_FETCHING : 
			return {
				...state, isFetching: action.toggleFetching
			}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state, 
				followingInProgress: action.isFetching 
				? [...state.followingInProgress, action.userId]
				:  state.followingInProgress.filter(id => id !== action.userId)
			}


		default:
			return state;
	}
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const isToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const isToggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage = 1, pageSize) => {

	return (dispatch) => {
		dispatch(isToggleFetching(true));
		dispatch(setCurrentPage(currentPage));

		usersApi.getUsers(currentPage, pageSize).then((data) => {
			dispatch(isToggleFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setUsersTotalCount(data.totalCount));
			});
	}
}

export const follow = (userId = 1) => {

	return (dispatch) => {
		dispatch(isToggleFollowingProgress(true, userId));
		usersApi.onFollow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(followSuccess(userId));
			}
			dispatch(isToggleFollowingProgress(false, userId));
		})
	}
}

export const unFollow = (userId = 1) => {

	return (dispatch) => {
		dispatch(isToggleFollowingProgress(true, userId));
		usersApi.onUnfollow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(unfollowSuccess(userId));
			}
			dispatch(isToggleFollowingProgress(false, userId));
		})
	}
}

export default userReducer;