import React, { Component } from 'react';


class ChatInput extends Component {
  render() {
    return (
      <div className="ChatInput">
        <textarea>write something</textarea>
        <button>SEND</button>
      </div>
    );
  }
}

export default ChatInput;
