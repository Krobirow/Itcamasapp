import React from "react";
import s from "./message.module.css";

const Message = (props) => {

	return (
		<div className={s.message}>
			<span className={s.messageImg}><img src={props.ava} alt="cat"/></span>
			<span>{props.message}</span>
		</div>
	)
};

export default Message;