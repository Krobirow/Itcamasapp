import React, { FC } from "react";
import preloader from '../../../assets/757.svg';
import s from './preloader.module.css'

const Preloader: FC<Record<string, never>> = () => {
	return (
		<div className={s.preloader}>
			<img src={preloader} alt="preloader"/>
		</div>
	)
}

export default Preloader;