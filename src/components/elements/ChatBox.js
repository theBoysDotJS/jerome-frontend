import React, { Component } from 'react';
import MessageBubble from '../assets/MessageBubble';
import Infinite from 'react-infinite';

class ChatBox extends Component {
  render() {
    return (
      <div className="chatbox">
	  	{/* SET CONTAINER HEIGHT AND WINDOW SCROLL TO BYPASS RENDER ERROR, ONLY PLACEHOLDER VALUE*/}
        <Infinite useWindowAsScrollContainer  elementHeight={30} containerHeight={90} displayBottomUpwards>
			<MessageBubble />
        </Infinite>
      </div>
    );
  }
}

export default ChatBox;
