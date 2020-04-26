import React from "react";
import s from "./post.module.css";

const Post = (props) => {
	return (
		<div className={s.postWrap}>
			<div className={`${s.post}`}>
				<img src="https://wallpapercave.com/wp/PCG5mFl.jpg" alt="cat" />
				{props.message}
				<div>
					<span>Like</span>
					<br/>
					<span>Dislike</span>
				</div>
			</div>
		</div>
	);
};

export default Post;
