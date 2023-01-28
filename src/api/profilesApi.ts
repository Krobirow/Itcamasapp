import { PhotosResponse, ResponseType } from './../redux/types';
import { ProfileTypeDataEl } from "../redux/types";
import { instance } from "./instance";

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
		return await instance.put<ResponseType>(`profile/status`, { status: status })
			.then(response => response.data)
	},
	async savePhoto(photoFile: File) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return await instance.put<ResponseType<PhotosResponse>>(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
			.then(response => response.data)
	},
	async saveProfile(profile: ProfileTypeDataEl) {
		return await instance.put<ResponseType>(`profile`, profile)
			.then(response => response.data)
	}
}
