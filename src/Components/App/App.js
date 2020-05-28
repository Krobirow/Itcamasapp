import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Route, withRouter } from "react-router-dom";

import s from "./App.module.css";

import Aside from "../Aside/Aside";

import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";

import Footer from "../Footer/Footer";
import LoginPage from "../Login/Login";

import { initializeApp } from "../../redux/appReducer";
import Preloader from "../common/Preloader/Preloader";
class App extends Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if(!this.props.initialized){ 
			return <Preloader/>
		} else {
			return (
				<div className={s.appWrapper}>
					<HeaderContainer />
					<Aside />
					<div className={s.appWrapperContent}>
						<Route path='/dialogs' render={() => <DialogsContainer />} />
						<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
						<Route path='/users' render={() => <UsersContainer />} />
						<Route path='/login' render={() => <LoginPage />} />
					</div>
					<Footer />
				</div>
			);
		}
	}
}
const mapStateToProps = state => ({
	initialized: state.app.initialized
})
export default compose(
		withRouter,
		connect(mapStateToProps, {initializeApp})
	)(App);
