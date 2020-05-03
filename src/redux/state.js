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
				{ id: 1, message: "How do You feel?", name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 2, message: "How are You ?", name: "Andrey", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 3, message: "How are they?", name: "Eugenij", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 4, message: "How could You ?", name: "Sasha", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 5, message: "How much You can ?", name: "Ania", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 6, message: "How long is it ?", name: "Vasya", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
				{ id: 7, message: "Oh, Hi Mark!", name: "Maks", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" }
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
		if (action.type === 'addPost') {
			let newPostDataEl = {
				id: this._state.profilePage.myPostData.length + 1,
				message: this._state.profilePage.newPostText,
				likesCount: 21,
				dislikesCount: 2,
			};
			this._state.profilePage.myPostData.push(newPostDataEl);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		
		} else if (action.type === 'updateNewPostText') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		
		} else if (action.type === 'addMessage') {
			let newMessageDataEl = {
				id: this._state.dialogsPage.messagesData.length + 1,
				message: this._state.dialogsPage.newMessageText,
				name: "Maks",
				ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"
			};

			this._state.dialogsPage.messagesData.push(newMessageDataEl);
			this._state.dialogsPage.newMessageText = '';
			this._callSubscriber(this._state);
		
		} else if (action.type === 'updateNewMessageText') {
			this._state.dialogsPage.newMessageText = action.newText;
			this._callSubscriber(this._state);
		}
	},
}

export default store;
