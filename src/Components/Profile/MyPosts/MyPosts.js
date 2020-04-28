import React from 'react';
import s from './myposts.module.css';

import Post from './Post/Post';

const MyPosts = () => {

	let myPostData = [
		{id: 1, message: "It's my first post", likesCount: 34, dislikesCount: 5},
		{id: 2, message: "Hi, how are you ?", likesCount: 3, dislikesCount: 0},
	]

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
		<Post id={myPostData[0].id} 
			message={myPostData[0].message} 
			likesCount={myPostData[0].likesCount} 
			dislikesCount={myPostData[0].dislikesCount}
		/>
		<Post id={myPostData[1].id} 
			message={myPostData[1].message} 
			likesCount={myPostData[1].likesCount} 
			dislikesCount={myPostData[1].dislikesCount}
		/>
	</div>
	);
}

export default MyPosts;