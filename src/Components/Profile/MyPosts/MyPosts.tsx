import React, { FC } from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import s from "./myposts.module.css";

import Post from "./Post/Post";
import { required, maxlengthCreator } from "../../../utils/validators/validators";
import { createField, Textarea } from "../../common/FormsControls/FormsControls";
import { MyPostDataElType } from "../../../redux/types";

const maxLength = maxlengthCreator(1000)

const MyPostsForm: FC<InjectedFormProps<MyPostsFormProps>> = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit} className={s.form}>
			<div>
				{createField<MyPostsFormValueKeysType>(undefined, "Enter Your post", "newPostText", [required, maxLength], Textarea)}
			</div>
			<div>
				<button type='submit'>Add post</button>
			</div>
		</form>
	)
}
const MyPostsReduxForm = reduxForm<MyPostsFormProps>({ form: "addPost" })(MyPostsForm);

const MyPosts: FC<MyPostsProps> = React.memo(({ myPostData, addPostAC }) => {
		const myPostsEl = myPostData.map((p) => (
			<Post
				key={p.id}
				id={p.id}
				postText={p.postText}
				likesCount={p.likesCount}
				dislikesCount={p.dislikesCount}
			/>
		))

		const addNewPost = (values: MyPostsFormProps) => {
			addPostAC(values.newPostText);
		}

		return (
			<div className={s.myPostsWrap}>
				<div>
					<h2>My Posts</h2>
				</div>
				<div className={s.MyPostsFormWraper}>
					<MyPostsReduxForm onSubmit={addNewPost} />
				</div>
				<h3 className={s.myPostsTitle}> New Posts</h3>
				{myPostsEl}
			</div>
		)
})

export default MyPosts

type MyPostsFormProps = { newPostText: string }
type MyPostsFormValueKeysType = Extract<keyof MyPostsFormProps, string>
type MyPostsProps = {
	myPostData: MyPostDataElType[]
	addPostAC: (newPostText: string) => void
}
