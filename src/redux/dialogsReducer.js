const add_Message = 'add_Message';
const update_New_Message_Text = 'update_New_Message_Text';

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case add_Message:
			let newMessageDataEl = {
				id: state.messagesData.length + 1,
				message: state.newMessageText,
				name: "me",
				ava: "https://wallpapercave.com/wp/PCG5mFl.jpg"
			};
	
			state.messagesData.push(newMessageDataEl);
			state.newMessageText = '';
			return state;
		case update_New_Message_Text: 
			state.newMessageText = action.newText;
			return state;
		default: 
			return state;
	}
}
export const addMessageActionCreator = () => ({type: add_Message});
export const updateNewMessageTextActionCreator = (text) => ({type: update_New_Message_Text, newText: text});


export default dialogsReducer;