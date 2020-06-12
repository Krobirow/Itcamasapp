import React from 'react';
import s from './footer.module.css';
import * as axios from 'axios';

const Footer = () => {

	const instanceWiki = axios.create({
		withCredentials: true,
		baseURL: 'https://en.wikipedia.org/w/api.php?',
		crossdomain: true,
		credentials: 'same-origin',
		mode: 'same-origin',
		headers: {
			'Access-Control-Allow-Origin' : '*',
			'Content-Type': 'text/html'
		}
	})

	function getWiki() {
		return instanceWiki.get(`action=parse&page=Pet_door&prop=text&formatversion=2`)
		.then(response => { console.log(response);})
	}

	getWiki();

	return (
		<footer className={s.footer}>
			<div >
				footer
			</div>
    	</footer>
	);
}

export default Footer;