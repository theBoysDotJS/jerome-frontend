import React from 'react';

//import components
import ChatBox from '../elements/ChatBox.js';
import ChatInput from '../elements/ChatInput.js';

class ChatRoom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<ChatBox></ChatBox>
			<ChatInput></ChatInput>
		);
	}
}

export default ChatRoom;
