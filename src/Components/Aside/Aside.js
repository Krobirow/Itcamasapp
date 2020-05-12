import React from 'react';
import s from './aside.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Aside = (props) => {
	return (
		<div className={s.aside}>
			<nav className={s.asideNav}>
				<ul className={s.asideNavUl}>
					<NavLink className={s.link} activeClassName={s.activeLink} to="/profile"><li>Profile</li></NavLink>
					<NavLink className={s.link} activeClassName={s.activeLink} to="/dialogs"><li>Messages</li></NavLink>
					<NavLink className={s.link} activeClassName={s.activeLink} to="/users"><li>Users</li></NavLink>
					<NavLink className={s.link} to="#s"><li>News</li></NavLink>
					<NavLink className={s.link} to="#s"><li>Music</li></NavLink>
					<NavLink className={s.link} to="#s"><li>Settings</li></NavLink>
				</ul>
			</nav>
			<div>
				{/* <Friends {...props.sidebar}/> */}
			</div>
		</div>
	);
}

export default Aside;