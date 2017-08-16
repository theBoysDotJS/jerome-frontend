import React, { Component } from 'react';
import {Link} from 'react-router'
import Avatar from '../assets/Avatar.js';
import Api from '../../api.js'

class ChatBox extends Component {
  constructor() {
	  super();
	  this.state = {}
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
	        <p>{this.state.username}</p>
	        <Avatar image={this.state.avatar}/>
			{/*<svg></svg>*/}
		</div>
      </nav>
    );
  }
}

export default ChatBox;
