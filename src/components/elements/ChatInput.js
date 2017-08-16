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

  _handleInput = (e) => {
    e.preventDefault();
    this.setState({
      currentInput: e.target.value
    })
    console.log(this.state.currentInput);
  }

  _handleSend = (e) => {
    e.preventDefault();
    var formData = {
      text: this.state.currentInput,
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
        <textarea onInput={this._handleInput} value={this.state.currentInput}>write something</textarea>
        <button onClick={e => this._handleSend(e)}>SEND</button>
      </div>
    );
  }
}

export default ChatInput;
