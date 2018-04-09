import React from 'react';
import logo from '../../static/logo.svg';
import './NavBar.css';

class NavBar extends React.Component {
	render() {
		return (
			<nav className="NavBar">
				<div className="left">
					<img
						src="https://cdn4.iconfinder.com/data/icons/arq-commonui/500/arq-menu-128.png"
						height="50"
						width="50"
					/>
				</div>
				<div className="left">
					<input placeholder="search" />
				</div>
				<div className="left">
					<img
						src="https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-2/128/notification-128.png"
						className="alert-icon"
						height="25"
						width="25"
					/>
				</div>

				<div className="right">Hello User</div>
				<div className="right">
					<img
						src="https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-256.png"
						height="50"
						width="50"
					/>
				</div>
			</nav>
		);
	}
}

export default NavBar;
