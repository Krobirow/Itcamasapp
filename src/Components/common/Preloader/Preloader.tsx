import React, { FC } from "react";
import { ReactComponent as PreloaderSVG } from '../../../assets/757.svg';
import s from './preloader.module.css'

const Preloader: FC<Record<string, never>> = () => {
	return (
		<div className={s.preloader}>
			<PreloaderSVG />
		</div>
	)
}

export default Preloader;