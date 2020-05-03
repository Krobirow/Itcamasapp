const add_Post = 'add_Post';
const add_Message = 'add_Message';
const update_New_Post_Text = 'update_New_Post_Text';
const update_New_Message_Text = 'update_New_Message_Text';


let store = {
	_callSubscriber() {
		console.log('state js called');
	},
	_state: {
		profilePage: {
			myPostData: [
				{ id: 1, message: "It's my first post", likesCount: 34, dislikesCount: 5 },
				{ id: 2, message: "Hi, how are you ?", likesCount: 3, dislikesCount: 0 }
			],
			newPostText: "It-Camasutra"
		},
		dialogsPage: {
			dialogsData: [
				{ id: 1, name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 2, name: "Andrey", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 3, name: "Eugenij", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 4, name: "Sasha", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 5, name: "Ania", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 6, name: "Vasya", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 7, name: "Maks", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" }
			],

			messagesData: [
				{ id: 1, message: "Hello, my friend", name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 2, message: "How are You ?", name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 3, message: "Thank You for asking!", name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 4, message: "I am good too", name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 5, message: "Are you saw Jhimmy today?", name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 6, message: "He was in a good mood!", name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 7, message: "Ok, I must go, buy", name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 8, message: "Hello!", name: "me", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 9, message: "I am fine, how are You?", name: "me", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 10, message: "Nice", name: "me", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 11, message: "No, I dont, why you asking?", name: "me", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 12, message: "Oh, it's great!", name: "me", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 13, message: "I am happy for him!", name: "me", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 14, message: "Ok, buy!", name: "me", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" }
			],
			newMessageText: "It-Camasutra"

		},
		sidebar: {
			asideFriends: [
				{ id: 1, name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 2, name: "Andrey", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 3, name: "Eugenij", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
			]
		}
	},
	getState() {
		return this._state;
	},
	setState(value) {
		this._state = value;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === 'add_Post') {
			let newPostDataEl = {
				id: this._state.profilePage.myPostData.length + 1,
				message: this._state.profilePage.newPostText,
				likesCount: 21,
				dislikesCount: 2,
			};
			this._state.profilePage.myPostData.push(newPostDataEl);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		
		} else if (action.type === 'update_New_Post_Text') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		
		} else if (action.type === 'add_Message') {
			let newMessageDataEl = {
				id: this._state.dialogsPage.messagesData.length + 1,
				message: this._state.dialogsPage.newMessageText,
				name: "me",
				ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"
			};

			this._state.dialogsPage.messagesData.push(newMessageDataEl);
			this._state.dialogsPage.newMessageText = '';
			this._callSubscriber(this._state);
		
		} else if (action.type === 'update_New_Message_Text') {
			this._state.dialogsPage.newMessageText = action.newText;
			this._callSubscriber(this._state);
		}
	},
}

export const addPostActionCreator = () => ({type: add_Post});
export const addMessageActionCreator = () => ({type: add_Message});

export const updateNewPostTextActionCreator = (text) => ({type: update_New_Post_Text, newText: text});
export const updateNewMessageTextActionCreator = (text) => ({type: update_New_Message_Text, newText: text});

export default store;
