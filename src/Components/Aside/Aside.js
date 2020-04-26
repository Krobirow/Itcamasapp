import React from 'react';
import s from './aside.module.css';

const Aside = () => {
	return (
		<aside className={s.aside}>
			<nav className={s.asideNav}>
				<ul className={s.asideNavUl}>
					<a className={`${s.link} ${s.active}`} href="#s"><li>Profile</li></a>
					<a className={s.link} href="#s"><li>Messages</li></a>
					<a className={s.link} href="#s"><li>News</li></a>
					<a className={s.link} href="#s"><li>Music</li></a>
					<a className={s.link} href="#s"><li>Settings</li></a>
				</ul>
			</nav>
		</aside>
	);
}

export default Aside;