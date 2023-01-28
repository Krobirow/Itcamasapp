import { getAuthUserData } from "./authReducer";
import { BaseThunkType, InferActionTypes } from "./redux-store";

const initialState = { initialized: false };

const appReducer = (state = initialState, action: ActionsTypes): AppReducerInitState => {
	switch (action.type) {
		case InitAppEnums.INITIALIZED_SUCCESS: 
			return {
				...state, 
				initialized: true
			}
		default:
			return state;
	}
}

export const initAppActions = { initializedSuccess: () => ({type: InitAppEnums.INITIALIZED_SUCCESS} as const) }
export const initializeApp = (): ThunkType => (dispatch) => dispatch(getAuthUserData()).then(()=>{ dispatch(initAppActions.initializedSuccess()); });

export default appReducer;

enum InitAppEnums { INITIALIZED_SUCCESS = 'SN/APP/INITIALIZED_SUCCESS' }
type AppReducerInitState = typeof initialState;
type ActionsTypes = InferActionTypes<typeof initAppActions>
type ThunkType = BaseThunkType<ActionsTypes>