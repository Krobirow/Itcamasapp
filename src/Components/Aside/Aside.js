import React from 'react';
import './aside.css';
const Aside = () => {
	return (
		<aside className="aside">
			<nav className="aside-nav">
				<ul className="aside-nav-ul">
					<a href="#s"><li>Profile</li></a>
					<a href="#s"><li>Messages</li></a>
					<a href="#s"><li>News</li></a>
					<a href="#s"><li>Music</li></a>
					<a href="#s"><li>Settings</li></a>
				</ul>
			</nav>
		</aside>
	);
}

export default Aside;