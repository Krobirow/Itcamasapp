import React from "react";
import s from "./App.module.css";

import Aside from "../Aside/Aside";

import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";

import Footer from "../Footer/Footer";

import { Route } from "react-router-dom";


const App = () => {
	return (
		<div className={s.appWrapper}>
			<HeaderContainer />
			<Aside />
			<div className={s.appWrapperContent}>
				<Route path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
				<Route path='/users' render={() => <UsersContainer />} />
			</div>
			<Footer />
		</div>
	);
};

export default App;
