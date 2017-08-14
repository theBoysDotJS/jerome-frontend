import React, { Component } from 'react';
import MessageBubble from '../MessageBubble';
var Infinite = require(react-infinite);

class Chatbox extends Component {
  render() {
    return (
      <div className="chatbox">
        <Infinite displayBottomUpwards>
        this is where the array of messages goes?
        </Infinite>
      </div>
    );
  }
}

export default ChatBox;
