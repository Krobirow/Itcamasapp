import React from 'react';
import s from './friends.module.css';

const Friends = (props) => {
	let {asideFriends} = props;

	let friends = asideFriends.map( f => 
				(<div className={s.friendsItem} id={f.id} key={f.id}>
						<div className={s.friendsIcon}> <img src={f.ava} alt="cat"/> </div>
						<div className={s.friendsLink}> {f.name} </div>
				</div>)
	);

	return (
		<div className={s.friends}>
			<h3 className={s.friendsTitle}>Friends</h3>
			<div className={s.eachFriendWrap}>
				{friends}
			</div>
		</div>
		
	)
}

export default Friends;