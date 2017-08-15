import React, { Component } from 'react';
import Avatar from '../assets/Avatar.js';

class ChatBox extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <img className="navbar--logo" src="http://unsplash.it/300/100"/>
        <h1>PAGE TITLE</h1>
		<div className="nav-bar--user-card">
	        <p>username</p>
	        <Avatar />
		</div>
        <img href="icon"/>
      </nav>
    );
  }
}

export default ChatBox;
