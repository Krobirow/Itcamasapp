import React from 'react';
import s from './myposts.module.css';

import Post from './Post/Post';


const MyPosts = (props) => {
	let {myPostData, newPostText} = props;

	let myPostsEl = myPostData
		.map(p => <Post key={p.id}
			id={p.id}
			message={p.message}
			likesCount={p.likesCount}
			dislikesCount={p.dislikesCount}
		/>);
	
	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = (e) => {
		let text = e.target.value;
		props.updateNewPostTextActionCreator(text)
	}

	return (
		<div className={s.myPostsWrap}>
			<div>
				<h2>My Posts</h2>
			</div>
			<div>
				<textarea placeholder='Enter Your post' onChange={onPostChange} value={newPostText} name="newPost" cols="20" rows="5" />
			</div>
			<div>
				<button onClick={onAddPost} type="button">Add post</button>
			</div>
			<h3 className={s.myPostsTitle}> New Posts</h3>
			{myPostsEl}
		</div>
	);
}

export default MyPosts;