import React, { Component } from 'react';
import Avatar from '../avatar';

class chatbox extends Component {
  render() {
    return (
      <nav className="NavBar">
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
