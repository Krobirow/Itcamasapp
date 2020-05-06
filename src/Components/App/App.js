import React from "react";
import s from "./App.module.css";

import Header from "../Header/Header";
import Aside from "../Aside/Aside";

import Profile from "../Profile/Profile";
import DialogsContainer from "../Dialogs/DialogsContainer";

import Footer from "../Footer/Footer";
import { Route } from "react-router-dom";


const App = () => {
	// let {state, store} = props;

	return (
			<div className={s.appWrapper}>
				<Header />
				<Aside  />
				<div className={s.appWrapperContent}>
					<Route path='/dialogs' 
						render={ () => <DialogsContainer/>} />
					<Route path='/profile' 
						render={ () => <Profile/>}/>
				</div>

				<Footer />
			</div>
	);
};

export default App;
