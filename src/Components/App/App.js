import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { Route, withRouter, Switch, HashRouter, Redirect } from "react-router-dom";
import { initializeApp } from "../../redux/appReducer";
import Preloader from "../common/Preloader/Preloader";
import store from "../../redux/redux-store";

import s from "./App.module.css";

import Aside from "../Aside/Aside";
import HeaderContainer from "../Header/HeaderContainer";
import Footer from "../Footer/Footer";
import LoginPage from "../Login/Login";

const DialogsContainer = React.lazy(() => import("../Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("../Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("../Profile/ProfileContainer"));

class AppWrapper extends Component {
	catchAllUnhadledErrors = (promiseRejectionEvent) => {
		alert('some error');
	}

	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhandledrejection", this.catchAllUnhadledErrors)
	}
	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhadledErrors)
	}

	render() {
		if(!this.props.initialized){ 
			return <Preloader/>
		} else {
			return (
				<div className={s.appWrapper}>
					<HeaderContainer />
					<Aside />
					<React.Suspense fallback={<Preloader />}>
						<div className={s.appWrapperContent}>
							<Switch>
								<Route path='/' exact render={() => <Redirect to={'/profile'}/>} />
								<Route path='/dialogs' render={() => <DialogsContainer />} />
								<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
								<Route path='/users' render={() => <UsersContainer />} />
								<Route path='/login' render={() => <LoginPage />} />
								<Route path='*' render={ () => <div> 404 NOT FOUND </div> } />
							</Switch>
						</div>
					</React.Suspense>
					<Footer />
				</div>
			);
		}
	}
}
const mapStateToProps = state => ({
	initialized: state.app.initialized
})

const AppContainer = compose(
		withRouter,
		connect(mapStateToProps, {initializeApp})
	)(AppWrapper);

const App = () => {
	return 	<HashRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</HashRouter>
}

export default App;
