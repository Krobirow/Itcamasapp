import profileReducer, { profileActions } from "./profileReducer";
import ReactDOM from "react-dom";
import React from 'react';
import { MyPostDataElType, ProfileTypeDataEl } from "./types";


const state = {
	newPostText: "",
	myPostData: [
		{ id: 1, postText: "It's my first post", likesCount: 34, dislikesCount: 5 },
		{ id: 2, postText: "Hi, how are you ?", likesCount: 3, dislikesCount: 0 }
	] as Array<MyPostDataElType>,
	profile: null as ProfileTypeDataEl | null,
	status: "" as string,
	isFetching: false,
	editMode: false
};

it('Length of posts should be increased +1 from 2 ', () => {
	const action = profileActions.addPost("Hello, world!");

	const newState = profileReducer(state, action)

	expect(newState.myPostData.length).toBe(3);
});

it('Message of last post should be "Hello World!"', () => {
	const action = profileActions.addPost("Hello, world!");

	const newState = profileReducer(state, action)

	expect(newState.myPostData[2].postText).toBe("Hello, world!");
});

it('Lenght after deleting should be decrement', () => {
	const action = profileActions.deletePost(1);

	const newState = profileReducer(state, action)

	expect(newState.myPostData.length).toBe(1);
});

it(`After deleting post length shouldn't be decrement if id is incorrect`, () => {
	const action = profileActions.deletePost(10000);

	const newState = profileReducer(state, action)

	expect(newState.myPostData.length).toBe(2);
});