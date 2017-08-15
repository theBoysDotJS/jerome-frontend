import React, { Component } from 'react';
import MessageBubble from '../MessageBubble';
import Infinite from 'react-infinite';

class Chatbox extends Component {
  render() {
    return (
      <div className="chatbox">
	  	{/* SET CONTAINER HEIGHT AND WINDOW SCROLL TO BYPASS RENDER ERROR, ONLY PLACEHOLDER VALUE*/}
        <Infinite useWindowAsScrollContainer containerHeight={90} displayBottomUpwards>
        this is where the array of messages goes?
        </Infinite>
      </div>
    );
  }
}

export default ChatBox;
