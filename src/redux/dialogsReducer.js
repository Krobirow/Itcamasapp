import avatar from '../assets/profilePic.jpg';
const ADD_MESSAGE = 'ADD_MESSAGE';


let initialState = {
	dialogsData: [
		{ id: 1, name: "Dimych", ava: avatar },
		{ id: 2, name: "Andrey", ava: avatar },
		{ id: 3, name: "Eugenij", ava: avatar },
		{ id: 4, name: "Sasha", ava: avatar },
		{ id: 5, name: "Ania", ava: avatar },
		{ id: 6, name: "Vasya", ava: avatar },
		{ id: 7, name: "Maks", ava: avatar }
	],

	messagesData: [
		{ id: 1, message: "Hello, my friend", name: "Dimych", ava: avatar },
		{ id: 2, message: "How are You ?", name: "Dimych", ava: avatar },
		{ id: 3, message: "Thank You for asking!", name: "Dimych", ava: avatar },
		{ id: 4, message: "I am good too", name: "Dimych", ava: avatar },
		{ id: 5, message: "Are you saw Jhimmy today?", name: "Dimych", ava: avatar },
		{ id: 6, message: "He was in a good mood!", name: "Dimych", ava: avatar },
		{ id: 7, message: "Ok, I must go, buy", name: "Dimych", ava: avatar },
		{ id: 8, message: "Hello!", name: "me", ava: avatar },
		{ id: 9, message: "I am fine, how are You?", name: "me", ava: avatar },
		{ id: 10, message: "Nice", name: "me", ava: avatar },
		{ id: 11, message: "No, I dont, why you asking?", name: "me", ava: avatar },
		{ id: 12, message: "Oh, it's great!", name: "me", ava: avatar },
		{ id: 13, message: "I am happy for him!", name: "me", ava: avatar },
		{ id: 14, message: "Ok, buy!", name: "me", ava: avatar }
	]
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				messagesData:  [
					...state.messagesData,
					{
						id: state.messagesData.length + 1,
						message: action.newMessageText,
						name: "me",
						ava: avatar
					}
				]
			};
		default: 
			return state;
	}
}
export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;