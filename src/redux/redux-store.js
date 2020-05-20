import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: userReducer,
	sidebar: sidebarReducer,
	auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;