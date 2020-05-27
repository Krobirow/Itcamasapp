import React from 'react';
import s from './myposts.module.css';

import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxlengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength = maxlengthCreator(10);

const MyPostsForm = props => {
	return(
		<form onSubmit={props.handleSubmit} className={s.form}>
			<div>
				<Field component={Textarea}
				name="newPostText" 
				placeholder="Enter Your post"
				validate={[required, maxLength]} />
			</div>
			<div>
				<button type="submit">Add post</button>
			</div>
		</form>
	)
}
const MyPostsReduxForm = reduxForm({ form: "addPost" })(MyPostsForm);

const MyPosts = (props) => {
	let {myPostData} = props;

	let myPostsEl = myPostData
		.map(p => <Post key={p.id}
			id={p.id}
			postText={p.postText}
			likesCount={p.likesCount}
			dislikesCount={p.dislikesCount}
		/>);

	const addNewPost = (values) => {
		console.log(values.newPostText);
		props.addPost(values.newPostText);
	}

	return (
		<div className={s.myPostsWrap}>
			<div>
				<h2>My Posts</h2>
			</div>
			<div className={s.MyPostsFormWraper}>
				<MyPostsReduxForm onSubmit={addNewPost}/>
			</div>
			<h3 className={s.myPostsTitle}> New Posts</h3>
			{myPostsEl}
		</div>
	);
}

export default MyPosts;