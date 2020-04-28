import React from 'react';
import s from './myposts.module.css';

import Post from './Post/Post';

const MyPosts = () => {

	let myPostData = [
		{ id: 1, message: "It's my first post", likesCount: 34, dislikesCount: 5 },
		{ id: 2, message: "Hi, how are you ?", likesCount: 3, dislikesCount: 0 },
	]
	let myPostsEl = myPostData
		.map(p => <Post id={p.id}
			message={p.message}
			likesCount={p.likesCount}
			dislikesCount={p.dislikesCount}
		/>);

	return (
		<div className={s.myPostsWrap}>
			<div>
				<h2>My Posts</h2>
			</div>
			<div>
				<textarea name="newPost" cols="20" rows="5"></textarea>
			</div>
			<div>
				<button type="button">Add post</button>
			</div>
			<h3 className={s.myPostsTitle}> New Posts</h3>
			{myPostsEl}
		</div>
	);
}

export default MyPosts;