import React from "react";
import preloader from '../../../assets/757.svg';
import s from './preloader.module.css'

let Preloader = (props) => {
	return (
		<div className={s.preloader}>
			<img src={preloader} alt="preloader"/>
		</div>
	)
}

export default Preloader;