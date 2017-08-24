import React, { Component } from 'react';
import Socket from '../../socketHandle.js'
import Anime from '../../animate.js';
class ChatInput extends Component {
  constructor(){
    super()
    this.state = {
      currentInput: "",
      user: ""
    }
  }
  componentDidMount(){
    Anime.chatSwipe();
  }
  _handleInput = (e) => {
    e.preventDefault();

    this.setState({
      currentInput: e.target.value
    })


	if(this.props.typing === false) {
		Socket.sendTyping(localStorage.user)
	}
  }

  _handleSend = (e) => {
    e.preventDefault();
    var formData = {
      text: this.state.currentInput,
      user: localStorage.user,
      convoId: this.props.id,
      type: "text"
    }

	console.log('message sent', formData)
    Socket.sendMessage(formData);
  }

  render() {
    return (
       <div className="chat-input">
        <input id="text-input" contentEditable placeholder="Write something..." onInput={this._handleInput} value={this.state.currentInput}></input>
        <button className="send-button" onClick={e => this._handleSend(e)}>SEND</button>
      </div>
    );
  }
}

export default ChatInput;
