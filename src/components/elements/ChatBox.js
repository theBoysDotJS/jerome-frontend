import React, { Component } from 'react';
import MessageBubble from '../assets/MessageBubble';
import Infinite from 'react-infinite';
import Api from '../../api'
const io = require("socket.io-client");
const socket = io('http://1758bd6e.ngrok.io');

class ChatBox extends Component {
  constructor(){
    super()
    this.state = {
      messages: []
    }
    this.displayMessage = this.displayMessage.bind(this);
  }
  componentDidMount(){
    Api.getMessages(this.props.id)
      .then(data => {
        this.setState({
          messages: data
        })
      })
  }
  displayMessage(curVal){
  return (<MessageBubble user={curVal.user} text={curVal.text}/>);
      }
    receiveMessage(){
    io.on('chat', data =>{
      let messages = this.state.messages;
      messages.push(data.text)
      this.setState({
        messages: messages
      })
    })
  }
  render() {

    return (
      <div className="chatbox">
	  	{/* SET CONTAINER HEIGHT AND WINDOW SCROLL TO BYPASS RENDER ERROR, ONLY PLACEHOLDER VALUE*/}
        <Infinite useWindowAsScrollContainer  elementHeight={30} containerHeight={90} displayBottomUpwards>
          {this.state.messages.map(this.displayMessage)}
        </Infinite>
      </div>
    );
  }
}

export default ChatBox;
