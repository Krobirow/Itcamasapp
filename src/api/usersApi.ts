import { ResponseType, UserResponseInterf } from './../redux/types';

import { instance } from "./instance";

export const usersApi = {
	async getUsers(currentPage = 1, pageSize = 10) {
		return await instance.get<UserResponseInterf>(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	async onUnfollow(userId = 1) {
		return await instance.delete<ResponseType>(`follow/${userId}`)
			.then(response => response.data)
	},
	async onFollow(userId = 1) {
		return await instance.post<ResponseType>(`follow/${userId}`)
			.then(response => response.data)
	}
}