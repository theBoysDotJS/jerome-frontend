import React, {component} from 'react';

//import components
import ChatBox from '../elements/ChatBox.js';
import ChatInput from '../elements/ChatInput.js';


class ChatRoom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			typing: false
		};
	}

	handleTyping = (bool) => {
		this.setState({
			typing: bool
		})
	}

	render() {
		return (
			<div className="chat-room">
				<ChatBox  id={this.props.params.id} users={this.state.users} typing={this.state.typing} setTyping={this.handleTyping}></ChatBox>
				<ChatInput id={this.props.params.id} users={this.state.users} typing={this.state.typing} setTyping={this.handleTyping}></ChatInput>
			</div>
		);
	}
}

export default ChatRoom;
