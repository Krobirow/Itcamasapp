
type SideBarAsideFriendsType = {
	id: number, name: string, ava: string 
}

const initialState = {
	asideFriends: [
		{ id: 1, name: "Dimych", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
		{ id: 2, name: "Andrey", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
		{ id: 3, name: "Eugenij", ava: "https://wallpapercave.com/wp/PCG5mFl.jpg" },
	] as Array<SideBarAsideFriendsType>
};

type InitStateInSideBar = typeof initialState;

const sidebarReducer = (state: InitStateInSideBar = initialState): InitStateInSideBar => {
	return state;
}

export default sidebarReducer;