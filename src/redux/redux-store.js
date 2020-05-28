import { createStore, combineReducers, applyMiddleware } from "redux";
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

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;