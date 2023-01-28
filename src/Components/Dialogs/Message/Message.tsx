import React, { FC } from "react";
import { MessagesDataEl } from "../../../redux/types";
import s from "./message.module.css";

type MessageProps = {
	messagesData: MessagesDataEl[]
}

const Message: FC<MessageProps> = ({ messagesData }) => {

	const messageRender = messagesData.map((m: MessagesDataEl) => {
		if (m.name === 'Dimych') {
			return (
				<div className={s.messageLeft} id={String(m.id)} key={m.id}>
					<div className={s.message} id={String(m.id)} key={m.id}>
						<span className={s.messageImg}>
							<img src={m.ava} alt="cat"/>
							<span>{m.name}</span>
						</span>
						<span>{m.message}</span>
					</div>
				</div>
				)
		} else if (m.name === 'me') {
			return (
				<div className={s.messageRight} id={String(m.id)} key={m.id}>
					<div className={s.message} id={String(m.id)} key={m.id}>
						<span className={s.messageImg}>
							{/* <img src={m.ava} alt="cat"/> */}
							{/* <span>{m.name}</span> */}
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