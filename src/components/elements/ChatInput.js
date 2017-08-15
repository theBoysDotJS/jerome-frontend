import React, { Component } from 'react';
const io = require("socket.io-client");
const socket = io('http://1758bd6e.ngrok.io');

class ChatInput extends Component {
  constructor(){
    super()
    this.state = {
      currentInput: "",
      user: ""
    }
    this._handleSend = this._handleSend.bind(this);
  }
  _handleSend(e){
    e.preventDefault();
    var formData = {
      text: this.state.currentInput,
      user: 10,
      convoId: 12,
      type: "text"

    }
    console.log(formData);
    socket.emit("chat", formData)
  }
  render() {
    return (
      <div className="ChatInput">
        <textarea>write something</textarea>
        <button onClick={e => this._handleSend(e)}>SEND</button>
      </div>
    );
  }
}

export default ChatInput;
