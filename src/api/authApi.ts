import { ResultCodeForCaptchaEnum, ResultCodesEnum } from '../redux/enums';
import { AuthMeUserRespInterf, ResponseType } from './../redux/types';
import { instance } from "./instance";

export const authApi = {
	async authMe() {
		return await instance.get<ResponseType<AuthMeUserRespInterf>>(`auth/me`)
			.then(response => response.data)
	},
	async loginMe(email: string, password: string, rememberMe = false, captcha: null | string = "") {
		return await instance.post<ResponseType<{ userId: number }, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, { email, password, rememberMe, captcha })
			.then(response => response.data)
	},
	async logout() {
		return await instance.delete<ResponseType>(`auth/login`)
			.then(response => response.data)
	}
}
