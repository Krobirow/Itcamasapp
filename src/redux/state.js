import { rerenderEntireTree } from "../render";


let state = {
	profilePage: {
		myPostData: [
			{ id: 1, message: "It's my first post", likesCount: 34, dislikesCount: 5 },
			{ id: 2, message: "Hi, how are you ?", likesCount: 3, dislikesCount: 0 }
		],
		newPostText: "It-Camasutra"
	},
	dialogsPage: {
		dialogsData: [
			{ id: 1, name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
			{ id: 2, name: "Andrey", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
			{ id: 3, name: "Eugenij", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
			{ id: 4, name: "Sasha", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
			{ id: 5, name: "Ania", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
			{ id: 6, name: "Vasya", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
			{ id: 7, name: "Maks", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"}
		],

		messagesData: [
			{ id: 1, message: "How do You feel?", name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
			{ id: 2, message: "How are You ?", name: "Andrey", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
			{ id: 3, message: "How are they?", name: "Eugenij", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
			{ id: 4, message: "How could You ?", name: "Sasha", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
			{ id: 5, message: "How much You can ?", name: "Ania", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
			{ id: 6, message: "How long is it ?", name: "Vasya", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
			{ id: 7, message: "Oh, Hi Mark!", name: "Maks", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"}
		],
		newMessageText: "It-Camasutra"
		
	},
	sidebar: {
		asideFriends: [
			{ id: 1, name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
			{ id: 2, name: "Andrey", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
			{ id: 3, name: "Eugenij", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"},
		]
	}
}

export let addPost = () => {
	let newPostDataEl = {
		id: 5, 
		message: state.profilePage.newPostText, 
		likesCount: 21, 
		dislikesCount: 2,
	};
	state.profilePage.myPostData.push(newPostDataEl);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export let addMessage = () => {
	let newMessageDataEl = { 	
		id: state.dialogsPage.messagesData.length + 1, 
		message: state.dialogsPage.newMessageText,
		name: "Maks",
		ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"
	};

	state.dialogsPage.messagesData.push(newMessageDataEl);
	state.dialogsPage.newMessageText = '';
	rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
	state.dialogsPage.newMessageText = newText;
	rerenderEntireTree(state);
}

export default state;