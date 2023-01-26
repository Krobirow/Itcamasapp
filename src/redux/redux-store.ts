import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: userReducer,
	sidebar: sidebarReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never 
export type InferActionTypes<T extends {[key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>> 

const store = configureStore({
	reducer: rootReducer, 
	middleware: [thunkMiddleware]
})

export default store