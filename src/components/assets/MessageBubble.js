import React from 'react';
import Avatar from './Avatar'
class MessageBubble extends React.Component {

	render() {

		return(
			<div classname={this.props.user === localStorage.user ? "mine" : "yours"} id="message-bubble">
				<p>{this.props.text}</p>
				<Avatar image="http://unsplash.it/48/48" />
			</div>
		);
	}
}

export default MessageBubble;
