import React, { Component } from 'react';
import Avatar from '../assets/Avatar.js';

class ChatBox extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <img className="navbar--logo" href="logo"/>
        <h1>HELLO WORLD</h1>
        <p>username</p>
        <Avatar />
        <img href="icon"/>
      </nav>
    );
  }
}

export default ChatBox;
