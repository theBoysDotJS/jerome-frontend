import React, { Component } from 'react';


class ChatInput extends Component {

  render() {
    return (
      <div className="chat-input">
        <textarea placeholder="Write something..."></textarea>
        <button>SEND</button>
      </div>
    );
  }
}

export default ChatInput;
