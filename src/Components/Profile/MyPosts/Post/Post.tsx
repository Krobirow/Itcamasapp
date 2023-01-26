import React, { FC } from "react";
import s from "./post.module.css";
import avatar from '../../../../assets/profilePic.jpg'
import { MyPostDataElType } from "../../../../redux/types";

const Post: FC<MyPostDataElType> = ({ postText, likesCount, dislikesCount }) => {
	return (
		<div className={s.postWrap}>
			<div className={`${s.post}`}>
				<img src={avatar} alt="cat" />
				<span>{postText}</span>
				<div className={s.likeDislikeBlock}>
					<span className={s.like}><a href="/like">Like &nbsp;</a> &nbsp;{likesCount} &nbsp;</span>
					<span className={s.dislike}><a href="/dislike">Dislike &nbsp;</a> &nbsp;{dislikesCount} &nbsp;</span> 
				</div>
			</div>
		</div>
	);
};

export default Post;
