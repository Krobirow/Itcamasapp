import React from 'react';
import s from './myposts.module.css';

import Post from './Post/Post';

const MyPosts = () => {
	return (

	<div className={s.myPostsWrap}>
		my posts
		<div className={s.myPostsTitle}> new post</div>
		<Post message="Hi, how are you ?" />
		<Post message="It's my first post" />
	</div>

	);
}

export default MyPosts;