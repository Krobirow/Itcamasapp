import React from 'react';
import s from './myposts.module.css';

import Post from './Post/Post';

const MyPosts = () => {
	return (

	<div className={s.myPostsWrap}>
		my posts
		<div className={s.myPostsTitle}> new post</div>
		<Post />
		<Post />
		<Post />
		<Post />
		<Post />
		<Post />
	</div>

	);
}

export default MyPosts;