import React from "react";
import s from "./App.module.css";

import Header from "../Header/Header";
import Aside from "../Aside/Aside";

import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

import Footer from "../Footer/Footer";
import { Route } from "react-router-dom";

const App = (props) => {
	let {addPost, updateNewPostText, addMessage, updateNewMessageText, state} = props;
	let {profilePage, dialogsPage, sidebar} = state;

	return (
			<div className={s.appWrapper}>
				<Header />
				<Aside sidebar={sidebar} />
				<div className={s.appWrapperContent}>
					<Route path='/dialogs' render={ () => <Dialogs dialogsPage={dialogsPage} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>}/>
					<Route path='/profile' render={ () => <Profile profilePage={profilePage} addPost={addPost} updateNewPostText={updateNewPostText} />}/>
				</div>

				<Footer />
			</div>
	);
};

export default App;
