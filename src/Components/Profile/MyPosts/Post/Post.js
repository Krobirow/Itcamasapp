import React from "react";
import s from "./post.module.css";

const Post = (props) => {
	return (
		<div className={s.postWrap}>
			<div className={`${s.post}`}>
				<img src="https://wallpapercave.com/wp/PCG5mFl.jpg" alt="cat" />
				<span>{props.message}</span>
				<div className={s.likeDislikeBlock}>
					<span className={s.like}><a href="/like">Like &nbsp;</a> &nbsp;{props.likesCount} &nbsp;</span>
					<span className={s.dislike}><a href="/dislike">Dislike &nbsp;</a> &nbsp;{props.dislikesCount} &nbsp;</span> 
				</div>
			</div>
		</div>
	);
};

export default Post;
