import React from "react";
import s from "./message.module.css";

const Message = (props) => {

	let {messagesData} = props;

	let messageRender = messagesData.map( (m, index) => {
		if (index % 2 === 0) {
			return (
				<div className={s.messageLeft} id={m.id} key={m.id}>
					<div className={s.message} id={m.id} key={m.id}>
						<span className={s.messageImg}>
							<img src={m.ava} alt="cat"/>
							<span>{m.name}</span>
						</span>
						<span>{m.message}</span>
					</div>
				</div>
				)
		} else {
			return (
				<div className={s.messageRight} id={m.id} key={m.id}>
					<div className={s.message} id={m.id} key={m.id}>
						<span className={s.messageImg}>
							<img src={m.ava} alt="cat"/>
							<span>{m.name}</span>
						</span>
						<span>{m.message}</span>
					</div>
				</div>
				)
		}

	});

	return (
		<div>
			{messageRender}
		</div>
	)
};

export default Message;