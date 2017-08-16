import React, { Component } from 'react';
import Avatar from '../assets/Avatar.js';
import Api from '../../api.js';
import {Link} from 'react-router';

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

		<Link to={"/"} className="nav-bar--logo" >
	      <img src="http://unsplash.it/300/100"/>
		</Link>

        <h1>{this.state.convoname ? this.state.convoname : 'Dashboard'}</h1>
		<div className="nav-bar--user-card">
			<div>
		        <p>{this.state.username}</p>
				<a href="/">Dashboard</a>
			</div>
	        <Avatar image={this.state.avatar}/>
		</div>
        <i className="">Settings Icon</i>
      </nav>
    );
  }
}

export default ChatBox;
