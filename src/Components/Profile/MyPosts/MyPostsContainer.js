import React from 'react';

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


// const MyPostsContainer = () => {
// 	// let state = props.store.getState();

// 	// let addPost = () => {
// 	// 	props.store.dispatch(addPostActionCreator());
// 	// }

// 	// let onPostChange = (text) => {
// 	// 	let action = updateNewPostTextActionCreator(text);
// 	// 	props.store.dispatch(action);
// 	// }

// 	return (
// 		<StoreContext.Consumer>
// 		{
// 			(store) => {
// 				let state = store.getState();
// 				let addPost = () => {
// 					store.dispatch(addPostActionCreator());
// 				}

// 				let onPostChange = (text) => {
// 					let action = updateNewPostTextActionCreator(text);
// 					store.dispatch(action);
// 				}
// 				return (<MyPosts
// 					updateNewPostTextActionCreator={onPostChange}
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
		addPost: () => {
			dispatch(addPostActionCreator());
		},
		updateNewPostTextActionCreator: (text) => {
			dispatch(updateNewPostTextActionCreator(text));
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;