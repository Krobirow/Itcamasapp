import { ResultCodeForCaptchaEnum, ResultCodesEnum } from "./enums"

export interface PhotosInterf {
	small: string | null
	large: string | null
}

export type PostDataElType = {
	id: number, 
	name: string, 
	ava: string
}

export type UserType = {
	name: string,
	id: number,
	photos: PhotosInterf,
	status: null | string,
	followed: boolean
}

export type ProfileContactsData = {
	contacts?: {
		github?: string,
		vk?: string,
		facebook?: string,
		instagram?: string,
		twitter?: string,
		website?: string,
		youtube?: string,
		mainLink?: string,
	} | object | undefined
}

export interface ProfilePhotosData {
	photos?: PhotosInterf | undefined
}

export interface ProfileTypeDataEl extends ProfileContactsData, ProfilePhotosData {
	aboutMe?: string,
	userId?: number | null,
	lookingForAJob: boolean,
	lookingForAJobDescription: string | undefined,
	fullName: string | undefined,
}

export type ProfileFormType = ProfileContactsData & {
	fullName: string,
	lookingForAJob: boolean,
	lookingForAJobDescription: string,
	aboutMe: string,
}

export type MyPostDataElType = {
	id: number, postText: string, likesCount: number, dislikesCount: number
}

export interface UserResponseInterf {
	items: Array<UserType>,
	totalCount: number,
	error: null | string
}

export interface RespWithResCodeAndMessagesInterf {
	resultCode: ResultCodesEnum | ResultCodeForCaptchaEnum,
	messages: Array<string>
}

export interface RespForCaptchaInterf extends RespWithResCodeAndMessagesInterf {
	url: string
}

export interface AuthMeUserRespInterf extends RespWithResCodeAndMessagesInterf {
	data: {
		id: number,
		email: string,
		login: string
	}
}

export interface LoginMeInterf extends RespWithResCodeAndMessagesInterf {
	data: { userId: number }
}

export interface ResponseWithEmptyDataObj extends RespWithResCodeAndMessagesInterf {
	data: Record<string, never>
}


export interface ProfileACTypes {
	updateUserStatus: (status: string) => void,
	savePhoto: (file: File) => void,
	saveProfile: (profile: ProfileTypeDataEl) => Promise<void>
}