import { ThunkAction } from 'redux-thunk';
import { getAuthUserData } from "./authReducer";
import { AppStateType, InferActionTypes } from "./redux-store";

enum InitAppEnums { INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS' }

type AppReducerInitState = typeof initialState;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
type ActionsTypes = InferActionTypes<typeof initAppActions>

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