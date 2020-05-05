import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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

		this._state.profilePage =  profileReducer(this._state.profilePage, action);
		this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar =  sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
		
	},
}

export default store;
