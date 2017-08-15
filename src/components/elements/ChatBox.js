import React, { Component } from 'react';
import MessageBubble from '../assets/MessageBubble';
import Infinite from 'react-infinite';

class ChatBox extends Component {
  constructor(){
    super()
    this.state = {
      messages: []
    }
    this.displayMessage = this.displayMessage.bind(this);
  }
  displayMessage(curVal){
  return (<MessageBubble user={curVal.user} text={curVal.text}/>);
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
