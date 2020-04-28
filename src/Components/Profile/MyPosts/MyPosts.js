import React from 'react';
import s from './myposts.module.css';

import Post from './Post/Post';

const MyPosts = () => {
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
		<Post message="It's my first post" likesCount="34" dislikesCount="5"/>
		<Post message="Hi, how are you ?" likesCount="0" dislikesCount="3"/>
	</div>
	);
}

export default MyPosts;