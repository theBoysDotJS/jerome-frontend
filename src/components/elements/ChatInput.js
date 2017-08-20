import React, { Component } from 'react';
import Socket from '../../socketHandle.js'

class ChatInput extends Component {
  constructor(){
    super()
    this.state = {
      currentInput: "",
      user: ""
    }
  }

  _handleInput = (e) => {
    e.preventDefault();
    this.setState({
      currentInput: e.target.value
    })
    // console.log(this.state.currentInput);
  }

  _handleSend = (e) => {
    e.preventDefault();
    var formData = {
      text: this.state.currentInput,
      user: localStorage.user,
      convoId: 1, //FIX THIS SET ONLY FOR TESTING
      type: "text"
    }

	console.log('message sent')
    Socket.sendMessage(formData);
  }
  render() {
    return (
       <div className="chat-input">
        <input id="text-input" contentEditable placeholder="Write something..." onInput={this._handleInput} value={this.state.currentInput}></input>
        <button onClick={e => this._handleSend(e)}>SEND</button>
      </div>
    );
  }
}

export default ChatInput;
