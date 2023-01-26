import React, { FC } from "react";
import s from "./dialogItem.module.css";
import { NavLink } from "react-router-dom";
import { PostDataElType } from "../../../redux/types";

const DialogItem: FC<PostDataElType> = ({ id, name, ava }) => {
	const path = "/dialogs/" + id;
	return (
		<div className={s.dialog}>
				<NavLink className={s.dialogIcon} activeClassName={s.active} to={path}> <img src={ava} alt="cat"/> </NavLink>
				<NavLink className={s.dialogLink} activeClassName={s.active} to={path}> {name} </NavLink>
		</div>
	)
};

export default DialogItem;