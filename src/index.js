import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './Components/App/App';
import state, { subscribe } from './redux/state';
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from './redux/state';

import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App appState={state}
				addPost={addPost} 
				updateNewPostText={updateNewPostText}
				addMessage={addMessage}
				updateNewMessageText={updateNewMessageText}
			/>
		</BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
