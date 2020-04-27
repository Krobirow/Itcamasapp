import React from "react";
import s from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
	return (
		<div className={s.dialogsWrap}>
			<div className={s.dialogsItem}>
				<div className={s.dialog}>
					<NavLink className={s.dialogLink + ' ' + s.active} activeClassName={s.active} to="/dialogs/1">Andrey</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink className={s.dialogLink} activeClassName={s.active} to="/dialogs/2">Eugenij</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink className={s.dialogLink} activeClassName={s.active} to="/dialogs/3">Sasha</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink className={s.dialogLink} activeClassName={s.active} to="/dialogs/4">Ania</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink className={s.dialogLink} activeClassName={s.active} to="/dialogs/5">Vasya</NavLink>
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}> How are You ?</div>
				<div className={s.message}> How are they?</div>
				<div className={s.message}> How could You ?</div>
				<div className={s.message}> How much You can ?</div>
				<div className={s.message}> How long is it ?</div>
			</div>
		</div>
	);
};

export default Dialogs;
