import React from "react";
import s from "./App.module.css";

import Header from "../Header/Header";
import Aside from "../Aside/Aside";

import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

import Footer from "../Footer/Footer";
import { Route, BrowserRouter } from "react-router-dom";

const App = (props) => {
	
	let {dialogsData, messagesData, myPostData} = props;

	return (
		<BrowserRouter>
			<div className={s.appWrapper}>
				<Header />
				<Aside />
				<div className={s.appWrapperContent}>
					<Route path='/dialogs' render={ () => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
					<Route path='/profile' render={ () => <Profile myPostData={myPostData} />}/>
				</div>

				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
