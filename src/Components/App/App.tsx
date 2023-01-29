import React, { PureComponent, ComponentType } from "react";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { Route, withRouter, Switch, HashRouter, Redirect } from "react-router-dom";
import { initializeApp } from "../../redux/appReducer";
// import Preloader from "../common/Preloader/Preloader";
import store from "../../redux/redux-store";

import s from "./App.module.css";

import Aside from "../Aside/Aside";
import HeaderContainer from "../Header/HeaderContainer";
import Footer from "../Footer/Footer";
import LoginPage from "../Login/Login";
import { AppStateType } from "../../redux/redux-store";
import { withSuspense } from "../hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('../Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import("../Profile/ProfileContainer"));

class AppWrapper extends PureComponent<MapStateToPropsType & MapDispatchToPropsType> {
	catchAllUnhadledErrors = (e: PromiseRejectionEvent) => {
		console.error('some error', e); // eslint-disable-line no-console
		alert('Unexpectd error occured. Read details in dev tools.');
	}

	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhandledrejection", this.catchAllUnhadledErrors)
	}
	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhadledErrors)
	}

	render() {
		return (
			<div className={s.appWrapper}>
				<HeaderContainer />
				<Aside />
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
				<Footer />
			</div>
		)
	}
}


type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
	initializeApp: () => void
}

const mapStateToProps = (state: AppStateType) => ({
	initialized: state.app.initialized
})

const AppContainer = compose<ComponentType>(
		withSuspense,
		withRouter,
		connect<MapStateToPropsType, MapDispatchToPropsType, Record<string, never>, AppStateType>(mapStateToProps, {initializeApp})
	)(AppWrapper)

const App:React.FC = () => {
	return 	<HashRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</HashRouter>
}

export default App
