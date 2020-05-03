import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './Components/App/App';
import store from './redux/state';
// import {addPost, updateNewPostText, addMessage, updateNewMessageText} from './redux/state';

import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state}
				addPost={store.addPost.bind(store)}
				updateNewPostText={store.updateNewPostText.bind(store)}
				addMessage={store.addMessage.bind(store)}
				updateNewMessageText={store.updateNewMessageText.bind(store)}
			/>
		</BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
