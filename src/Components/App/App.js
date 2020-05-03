import React from "react";
import s from "./App.module.css";

import Header from "../Header/Header";
import Aside from "../Aside/Aside";

import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

import Footer from "../Footer/Footer";
import { Route } from "react-router-dom";

const App = (props) => {
	
	let {appState, addPost, updateNewPostText, addMessage, updateNewMessageText} = props;

	let {profilePage, dialogsPage, sidebar} = appState;

	return (
			<div className={s.appWrapper}>
				<Header />
				<Aside state={sidebar} />
				<div className={s.appWrapperContent}>
					<Route path='/dialogs' render={ () => <Dialogs state={dialogsPage} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>}/>
					<Route path='/profile' render={ () => <Profile profilePage={profilePage} updateNewPostText={updateNewPostText} addPost={addPost}/>}/>
				</div>

				<Footer />
			</div>
	);
};

export default App;
