import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';

let appData = {
	dialogsData: [
		{ id: 1, name: "Dimych" },
		{ id: 2, name: "Andrey" },
		{ id: 3, name: "Eugenij" },
		{ id: 4, name: "Sasha" },
		{ id: 5, name: "Ania" },
		{ id: 6, name: "Vasya" },
		{ id: 7, name: "Maks" }
	],
	messagesData: [
		{ id: 1, message: "How do You feel?" },
		{ id: 2, message: "How are You ?" },
		{ id: 3, message: "How are they?" },
		{ id: 4, message: "How could You ?" },
		{ id: 5, message: "How much You can ?" },
		{ id: 6, message: "How long is it ?" },
		{ id: 7, message: "Oh, Hi Mark!" }
	],
	myPostData: [
		{ id: 1, message: "It's my first post", likesCount: 34, dislikesCount: 5 },
		{ id: 2, message: "Hi, how are you ?", likesCount: 3, dislikesCount: 0 }
	]
};

ReactDOM.render(<App {...appData}/>, document.getElementById('root'));

serviceWorker.unregister();
