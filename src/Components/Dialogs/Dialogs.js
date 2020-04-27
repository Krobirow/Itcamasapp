import React from "react";
import s from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
	return (
		<div className={s.dialogsWrap}>
			<div className={s.dialogsItem}>
				<div className={s.dialog}>
					<NavLink className={s.dialogLink + ' ' + s.active} activeClassName={s.active} to="#$">Andrey</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink className={s.dialogLink} activeClassName={s.active} to="#%">Eugenij</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink className={s.dialogLink} activeClassName={s.active} to="#^">Sasha</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink className={s.dialogLink} activeClassName={s.active} to="/Ania">Ania</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink className={s.dialogLink} activeClassName={s.active} to="/Vasya">Vasya</NavLink>
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
