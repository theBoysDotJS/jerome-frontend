import React, {component} from 'react';

//import components
import ChatBox from '../elements/ChatBox.js';
import ChatInput from '../elements/ChatInput.js';



class ChatRoom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}

	render() {
		return (

			<div className="chat-room">
				<ChatBox  id={this.props.params.id} users={this.state.users}></ChatBox>
				<ChatInput users={this.state.users}></ChatInput>
			</div>
		);
	}
}

export default ChatRoom;
