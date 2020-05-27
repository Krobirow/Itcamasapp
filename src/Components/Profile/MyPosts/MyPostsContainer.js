import { addPost, updateNewPostText } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


// const MyPostsContainer = () => {
// 	// let state = props.store.getState();

// 	// let addPost = () => {
// 	// 	props.store.dispatch(addPost());
// 	// }

// 	// let onPostChange = (text) => {
// 	// 	let action = updateNewPostText(text);
// 	// 	props.store.dispatch(action);
// 	// }

// 	return (
// 		<StoreContext.Consumer>
// 		{
// 			(store) => {
// 				let state = store.getState();
// 				let addPost = () => {
// 					store.dispatch(addPost());
// 				}

// 				let onPostChange = (text) => {
// 					let action = updateNewPostText(text);
// 					store.dispatch(action);
// 				}
// 				return (<MyPosts
// 					updateNewPostText={onPostChange}
// 					addPost={addPost}
// 					myPostData={state.profilePage.myPostData}
// 					newPostText={state.profilePage.newPostText}
// 				/>)
// 			}
// 		}
// 		</StoreContext.Consumer>
// 	);
// }

let mapStateToProps = (state) => {
	return {
		myPostData: state.profilePage.myPostData,
		newPostText: state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPostText) => {
			dispatch(addPost(newPostText));
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;