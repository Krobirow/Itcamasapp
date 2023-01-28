import { RespForCaptchaInterf } from './../redux/types';
import { instance } from "./instance";

export const securityApi = {
	async captcha() {
		return instance.get<RespForCaptchaInterf>(`security/get-captcha-url`)
			.then(response => response.data)
	}
}
