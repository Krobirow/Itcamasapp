const add_Post = 'add_Post';
const update_New_Post_Text = 'update_New_Post_Text';

let initialState = {
	myPostData: [
		{ id: 1, message: "It's my first post", likesCount: 34, dislikesCount: 5 },
		{ id: 2, message: "Hi, how are you ?", likesCount: 3, dislikesCount: 0 }
	],
	newPostText: "It-Camasutra"
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case add_Post:
			let newPostDataEl = {
				id: state.myPostData.length + 1,
				message: state.newPostText,
				likesCount: 21,
				dislikesCount: 2,
			};
			state.myPostData.push(newPostDataEl);
			state.newPostText = '';
			return state;
		case update_New_Post_Text: 
			state.newPostText = action.newText;
			return state;
		default: 
			return state;
	}
}

export const addPostActionCreator = () => ({type: add_Post});
export const updateNewPostTextActionCreator = (text) => ({type: update_New_Post_Text, newText: text});

export default profileReducer;