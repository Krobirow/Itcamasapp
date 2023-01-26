import { AuthMeUserRespInterf, LoginMeInterf, RespForCaptchaInterf, ResponseWithEmptyDataObj, UserResponseInterf } from './../redux/types';
import { ProfileTypeDataEl } from "../redux/types";
import { instance } from "./instance";

export const usersApi = {
	async getUsers(currentPage = 1, pageSize = 10) {
		return await instance.get<UserResponseInterf>(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	async onUnfollow(userId = 1) {
		return await instance.delete<ResponseWithEmptyDataObj>(`follow/${userId}`)
			.then(response => response.data)
	},
	async onFollow(userId = 1) {
		return await instance.post<ResponseWithEmptyDataObj>(`follow/${userId}`)
			.then(response => response.data)
	}
}

export const profilesApi = {
	async getProfile(userId: number | null) {
		return await instance.get<ProfileTypeDataEl>(`profile/${userId}`)
			.then(response => response.data)
	},
	async getStatus(userId: number | null) {
		return await instance.get<string>(`profile/status/${userId}`)
			.then(response => response.data)
	},
	async updateStatus(status: string) {
		return await instance.put<ResponseWithEmptyDataObj>(`profile/status`, { status: status })
			.then(response => response.data)
	},
	async savePhoto(photoFile: File) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return await instance.put<ResponseWithEmptyDataObj>(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
			.then(response => response.data)
	},
	async saveProfile(profile: ProfileTypeDataEl) {
		return await instance.put<ResponseWithEmptyDataObj>(`profile`, profile)
			.then(response => response.data)
	}
}

export const authApi = {
	async authMe() {
		return await instance.get<AuthMeUserRespInterf>(`auth/me`)
			.then(response => response.data)
	},
	async loginMe(email: string, password: string, rememberMe = false, captcha: null | string = "") {
		return await instance.post<LoginMeInterf>(`auth/login`, { email, password, rememberMe, captcha })
			.then(response => response.data)
	},
	async logout() {
		return await instance.delete<ResponseWithEmptyDataObj>(`auth/login`)
			.then(response => response.data)
	}
}

export const securityApi = {
	async captcha() {
		return instance.get<RespForCaptchaInterf>(`security/get-captcha-url`)
			.then(response => response.data)
	}
}
