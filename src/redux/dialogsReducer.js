const add_Message = 'add_Message';
const update_New_Message_Text = 'update_New_Message_Text';

let initialState = {
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

};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case add_Message:
			return {
				...state,
				newMessageText: '',
				messagesData:  [
					...state.messagesData,
					{
						id: state.messagesData.length + 1,
						message: state.newMessageText,
						name: "me",
						ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"
					}
				]
			};
		case update_New_Message_Text:
			return {
				...state,
				newMessageText: action.newText
			};
		default: 
			return state;
	}
}
export const addMessage = () => ({type: add_Message});
export const updateNewMessageText = (text) => ({type: update_New_Message_Text, newText: text});


export default dialogsReducer;