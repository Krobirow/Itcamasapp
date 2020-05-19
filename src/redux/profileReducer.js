const add_Post = 'add_Post';
const update_New_Post_Text = 'update_New_Post_Text';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	myPostData: [
		{ id: 1, message: "It's my first post", likesCount: 34, dislikesCount: 5 },
		{ id: 2, message: "Hi, how are you ?", likesCount: 3, dislikesCount: 0 }
	],
	newPostText: "It-Camasutra",
	profile: null
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case add_Post:
			return {
				...state,
				myPostData: [
					...state.myPostData,
					{
						id: state.myPostData.length + 1,
						message: state.newPostText,
						likesCount: 21,
						dislikesCount: 2,
					}
				],
				newPostText: ''
			};
		case update_New_Post_Text: 
			return {
				...state,
				newPostText: action.newText
			};
		case SET_USER_PROFILE: 
			return {
				...state, profile: action.profile
			}
		default:
			return state;
	}
}

export const addPost = () => ({type: add_Post});
export const updateNewPostText = (text) => ({type: update_New_Post_Text, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export default profileReducer;