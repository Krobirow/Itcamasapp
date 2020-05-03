import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';


import {addPost, updateNewPostText, addMessage, updateNewMessageText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntireTree = (state) => {
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
