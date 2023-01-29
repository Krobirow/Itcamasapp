import { addPostAC } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { MyPostDataElType } from '../../../redux/types';


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

type MapStateToPropsType = {
	myPostData: MyPostDataElType[]
}
type MapDispatchToPropsType = {
	addPostAC: (newPostText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		myPostData: state.profilePage.myPostData,
	}
}

const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, Record<string, never>, AppStateType>(mapStateToProps, { addPostAC })(MyPosts);

export default MyPostsContainer;