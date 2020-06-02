import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: userReducer,
	sidebar: sidebarReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
});

// store without extension
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// Created store for chrome extension redux
const composeEnchances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnchances( applyMiddleware(thunkMiddleware)), );

window.__store__ = store;


export default store;