import React, { Component } from 'react';
import {Link} from 'react-router'
import Avatar from '../assets/Avatar.js';
import Settings from "./Settings.js"
import CreateConvo from "./CreateConvo.js"
import Api from '../../api.js';

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
			this.setState({
				username: user.username,
				user_id: user.id,
				avatar: user.avatarUrl
			})
		})
  }

  toggleSettings = (e) => {
	  e.preventDefault();

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

        <h1>{this.state.convoname ? this.state.convoname : 'Dashboard'}</h1>
		<div className="nav-bar--user-card">
			<div>
		        <p onClick={this.toggleSettings}>{this.state.username}</p>
			</div>
	        <Avatar image={this.state.avatar}/>
          <p onClick={this.toggleCreate}>+</p>
			<Settings close={this.toggleSettings} isOpen={this.state.settingsOpen}/>
      <CreateConvo close={this.toggleCreate} isOpen={this.state.createOpen}/>
		</div>
      </nav>
    );
  }
}

export default ChatBox;
