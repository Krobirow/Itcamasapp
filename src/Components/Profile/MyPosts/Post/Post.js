import React from "react";
import s from "./post.module.css";

const Post = () => {
	return (
		<div className={s.postWrap}>
			<div className={`${s.post} ${s.active}`}>
				<img src="https://wallpapercave.com/wp/PCG5mFl.jpg" alt="cat" />
				post 1
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
