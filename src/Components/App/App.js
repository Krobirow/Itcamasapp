import React from "react";
import s from "./App.module.css";

import Header from "../Header/Header";
import Aside from "../Aside/Aside";

// import Profile from '../Profile/Profile';
import Dialogs from "../Dialogs/Dialogs";

import Footer from "../Footer/Footer";

const App = () => {
	return (
		<div className={s.appWrapper}>
			<Header />
			<Aside />
			<div className={s.appWrapperContent}>
				{/* <Profile /> */}
				<Dialogs />
			</div>

			<Footer />
		</div>
	);
};

export default App;
