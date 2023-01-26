import { ResponseWithEmptyDataObj, UserType } from './types';
import { usersApi } from "../api/api";
import { updateObjectInArray } from "./usersObjectsHelper";
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType, InferActionTypes } from './redux-store';
import { ResultCodesEnum } from './enums';

enum UsersReducAT {
	FOLLOW = 'FOLLOW',
	UNFOLLOW = 'UNFOLLOW',
	SET_USERS = 'SET_USERS',
	SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
	SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT',
	TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
	TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS',
}

const initialState = {
	users: [ ] as Array<UserType>,
	pageSize: 5 as number,
	totalUsersCount: 21 as number,
	currentPage: 1 as number,
	isFetching: false as boolean,
	followingInProgress: [2, 3] as Array<number>
};

export type InitStateOfUserReducerType = typeof initialState;

const userReducer = (state: InitStateOfUserReducerType = initialState, action: ActionsTypes): InitStateOfUserReducerType => {
	switch (action.type) {
		case UsersReducAT.FOLLOW: 
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
			}

		case UsersReducAT.UNFOLLOW: 
			return {
				...state, 
				users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
			}

		case UsersReducAT.SET_USERS: 
			return {...state, users: action.users};

		case UsersReducAT.SET_CURRENT_PAGE: 
			return {
				...state, currentPage: action.currentPage
			}

		case UsersReducAT.SET_USERS_TOTAL_COUNT: 
			return {
				...state, totalUsersCount: action.totalCount
			}

		case UsersReducAT.TOGGLE_IS_FETCHING : 
			return {
				...state, isFetching: action.isFetching
			}
		case UsersReducAT.TOGGLE_IS_FOLLOWING_PROGRESS:
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

type ActionsTypes = InferActionTypes<typeof usersActions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
type DispatchType = Dispatch<ActionsTypes>

export const usersActions = {
	isToggleFetching: (isFetching: boolean) => ({type: UsersReducAT.TOGGLE_IS_FETCHING, isFetching} as const),
	followSuccess: (userId: number) => ({type: UsersReducAT.FOLLOW, userId} as const),
	unfollowSuccess: (userId: number) => ({type: UsersReducAT.UNFOLLOW, userId} as const),
	setUsers: (users: Array<UserType>) => ({type: UsersReducAT.SET_USERS, users} as const),
	setCurrentPage: (currentPage: number) => ({type: UsersReducAT.SET_CURRENT_PAGE, currentPage} as const),
	setUsersTotalCount: (totalCount: number) => ({type: UsersReducAT.SET_USERS_TOTAL_COUNT, totalCount} as const),
	isToggleFollowingProgress: (isFetching: boolean, userId: number) => ({type: UsersReducAT.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const),
}

export const getUsers = (currentPage = 1, pageSize: number): ThunkType => async (dispatch) => {
	dispatch(usersActions.isToggleFetching(true));
	dispatch(usersActions.setCurrentPage(currentPage));

	const data = await usersApi.getUsers(currentPage, pageSize);
	dispatch(usersActions.setUsers(data.items));
	dispatch(usersActions.setUsersTotalCount(data.totalCount));
	dispatch(usersActions.isToggleFetching(false));
}

const _followUnfollowToggle = async (dispatch: DispatchType, userId: number, apiMethod: (userId: number) => Promise<ResponseWithEmptyDataObj>, actionCreator: (userId: number) => ActionsTypes) => {
	dispatch(usersActions.isToggleFollowingProgress(true, userId));
	const data = await apiMethod(userId);
	if (data.resultCode === ResultCodesEnum.Success) {
		dispatch(actionCreator(userId));
	}
	dispatch(usersActions.isToggleFollowingProgress(false, userId));
}
export const follow = (userId = 1): ThunkType => { return async (dispatch) => _followUnfollowToggle(dispatch, userId, usersApi.onFollow, usersActions.followSuccess);}
export const unFollow = (userId = 1): ThunkType => { return async (dispatch) => _followUnfollowToggle(dispatch, userId, usersApi.onUnfollow, usersActions.unfollowSuccess);}

export default userReducer;