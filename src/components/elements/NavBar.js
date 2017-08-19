import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router'
import Avatar from '../assets/Avatar.js';
import Settings from "./Settings.js"
import CreateConvo from "./CreateConvo.js"
import Api from '../../api.js';
import Auth from '../../auth.js';

class ChatBox extends Component {
	constructor() {
		super();
		this.state = {
			settingOpen: false,
			creteOpen: false
		}
	}

	_getUser = () => {
		Api.getMe(localStorage.token).then(res => res.body).then(user => {
			console.log(user, 'user obj in getMe')
			this.setState({username: user[0].username, user_id: user[0].id, avatar: user[0].avatarUrl})
		})
	}

	_toggleSetting = (e) => {
		e.preventDefault();
		this.setState({
			settingOpen: !this.state.settingOpen
		})
	}

	_toggleCreate = (e) => {
		e.preventDefault();
		this.setState({
			createOpen: !this.state.createOpen
		})
	}

	_logout = (e) => {
		e.preventDefault();

		Auth.logout().then(res => {
			if (res === true) {
				browserHistory.push('/login')
			}
		})

		this._toggleSettings();
	}

	componentDidMount() {
		this._getUser();
	}

	componentDidUpdate() {
		//add function here to reset user info on logout/login
	}

	render() {
		return (
			<nav className="nav-bar">

				<Link to={'/'}>
					<img className="nav-bar--logo" src="/logo.svg" alt="some kind of thing"/>
				</Link>

				<h1>{this.state.convoname
						? this.state.convoname
						: 'Dashboard'}</h1>
				<div className="nav-bar--user-card">
					<p onClick={e => this._toggleSetting(e)}>{this.state.username}</p>
					<Avatar image={this.state.avatar}/>
					<p onClick={e => this._toggleCreate(e)}>+</p>
					<Settings close={this._toggleSetting} isOpen={!!this.state.settingOpen} logout={this._logout}/>
					<CreateConvo close={this._toggleCreate} isOpen={!!this.state.createOpen}/>
				</div>
			</nav>
		);
	}
}

export default ChatBox;
