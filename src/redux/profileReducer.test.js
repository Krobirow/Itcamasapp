import profileReducer, { addPost, deletePost } from "./profileReducer";
import ReactDOM from "react-dom";
import React from 'react';


let state = {
	myPostData: [
		{ id: 1, postText: "It's my first post", likesCount: 34, dislikesCount: 5 },
		{ id: 2, postText: "Hi, how are you ?", likesCount: 3, dislikesCount: 0 }
	]
};

it('Length of posts should be increased +1 from 2 ', () => {
	let action = addPost("Hello, world!");

	let newState = profileReducer(state, action)

	expect(newState.myPostData.length).toBe(3);
});

it('Message of last post should be "Hello World!"', () => {
	let action = addPost("Hello, world!");

	let newState = profileReducer(state, action)

	expect(newState.myPostData[2].postText).toBe("Hello, world!");
});

it('Lenght after deleting should be decrement', () => {
	let action = deletePost(1);

	let newState = profileReducer(state, action)

	expect(newState.myPostData.length).toBe(1);
});

it(`After deleting post length shouldn't be decrement if id is incorrect`, () => {
	let action = deletePost(10000);

	let newState = profileReducer(state, action)

	expect(newState.myPostData.length).toBe(2);
});