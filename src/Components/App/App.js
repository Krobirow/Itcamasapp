import React from "react";
import s from "./App.module.css";

import Header from "../Header/Header";
import Aside from "../Aside/Aside";

import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

import Footer from "../Footer/Footer";
import { Route, BrowserRouter } from "react-router-dom";

const App = (props) => {
	
	let {appState} = props;

	let {profilePage, dialogsPage, sidebar} = appState;

	return (
		<BrowserRouter>
			<div className={s.appWrapper}>
				<Header />
				<Aside state={sidebar} />
				<div className={s.appWrapperContent}>
					<Route path='/dialogs' render={ () => <Dialogs state={dialogsPage}/>}/>
					<Route path='/profile' render={ () => <Profile state={profilePage} />}/>
				</div>

				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
