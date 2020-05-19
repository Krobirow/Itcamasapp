import React from "react";
import s from "./dialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={s.dialog}>
				<NavLink className={s.dialogIcon} activeClassName={s.active} to={path}> <img src={props.ava} alt="cat"/> </NavLink>
				<NavLink className={s.dialogLink} activeClassName={s.active} to={path}> {props.name} </NavLink>
		</div>
	)
};

export default DialogItem;