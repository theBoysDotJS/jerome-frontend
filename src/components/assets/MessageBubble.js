import React, { Component } from 'react';

class MessageBubble extends React.Component {

	render() {
		return(
			<div id="message-bubble">
				<p>{this.props.text}</p>
			</div>
		);
	}
}

export default MessageBubble;
