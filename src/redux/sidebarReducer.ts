const initialState = {
	asideFriends: [
		{ id: 1, name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
		{ id: 2, name: "Andrey", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
		{ id: 3, name: "Eugenij", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
	] as Array<SideBarAsideFriendsType>
};

const sidebarReducer = (state: InitStateInSideBar = initialState): InitStateInSideBar => {
	return state;
}

export default sidebarReducer;

type InitStateInSideBar = typeof initialState;
type SideBarAsideFriendsType = {
	id: number, name: string, ava: string 
}