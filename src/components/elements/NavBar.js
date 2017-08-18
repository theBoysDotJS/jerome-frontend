import React, { Component } from 'react';
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
		  settingsOpen: false,
      createOpen: false
	  }
  }

  _getUser = () => {
	  Api.getMe(localStorage.token)
	  	.then(res => res.body)
		.then(user => {
			console.log(user, 'user obj in getMe')
			this.setState({
				username: user[0].username,
				user_id: user[0].id,
				avatar: user[0].avatarUrl
			})
		})
  }

  _toggleSettings = (e) => {
	  e.preventDefault();
	  console.log(this.state.settingsOpen)
	  this.setState({
		  settingsOpen: !this.state.settingsOpen
	  })
  }

  toggleCreate = (e) => {
	  e.preventDefault();

	  this.setState({
		  createOpen: !this.state.createOpen
	  })
  }

  _logout = (e) => {
	e.preventDefault();

	Auth.logout()
		.then(res => {
			if(res === true) {
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

		<div className="nav-bar--flex">
		  	<Link to={'/'}>
	        	<img className="nav-bar--logo" src="/logo.svg" alt="some kind of thing"/>
			</Link>
		</div>

		<div className="nav-bar--flex nav-bar--center">
        	<h1>{this.state.convoname ? this.state.convoname : 'Dashboard'}</h1>
		</div>

		<div className="nav-bar--flex nav-bar--user-card">
			<div>
		        <p onClick={this.toggleSettings}>{this.state.username}</p>
			</div>
	        <Avatar image={this.state.avatar}/>
          <p onClick={this.toggleCreate}>+</p>
			{!!this.state.settingsOpen ? <Settings close={this._toggleSettings} logout={this._logout}/> : null}
      	  <CreateConvo close={this.toggleCreate} isOpen={this.state.createOpen}/>

		</div>
      </nav>
    );
  }
}

export default ChatBox;
