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
    this._handleInput = this._handleInput.bind(this);
  }

  _handleInput(e){
    e.preventDefault();
    this.setState({
      currentInput: e.target.value
    })
    console.log(this.state.currentInput);
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
        <textarea onInput={this._handleInput} value={this.state.currentInput}>write something</textarea>
        <button onClick={e => this._handleSend(e)}>SEND</button>
      </div>
    );
  }
}

export default ChatInput;
