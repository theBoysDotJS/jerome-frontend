import React from 'react';
import Avatar from './Avatar'
class MessageBubble extends React.Component {

	render() {

		return(
			<div className='message-container'>
				<div className='message-bubble'>
					<div className={this.props.user === localStorage.user ? "message-bubble--mine" : "message-bubble--yours"} id="message-bubble">
						<div classname="relativeBox">
							<p>{this.props.text}</p>
						</div>
						<Avatar className="message-bubble--avatar" image="http://unsplash.it/32/32" />
					</div>
				</div>
			</div>
		);
	}
}

export default MessageBubble;
