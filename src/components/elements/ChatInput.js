import React, { Component } from 'react';
import Socket from '../../socketHandle.js'

class ChatInput extends Component {
  constructor(){
    super()
    this.state = {
      currentInput: "Hamburger",
      user: ""
    }
  }
  _handleSend = (e) => {
    e.preventDefault();
    var formData = {
      text: this.refs.textarea.value,
      user: 10,
      convoId: 12,
      type: "text"
    }

    console.log(formData);
    Socket.sendMessage(formData);
  }
  render() {
    return (
      <div className="ChatInput">
        <textarea ref='textarea'>write something</textarea>
        <button onClick={e => this._handleSend(e)}>SEND</button>
      </div>
    );
  }
}

export default ChatInput;
