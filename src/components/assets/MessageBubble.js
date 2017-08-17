import React from 'react';
import Avatar from './Avatar'
class MessageBubble extends React.Component {

	render() {

		return(
			<div className='message-container'>

					<div className={this.props.user === localStorage.user ? "message-bubble--mine" : "message-bubble--yours"} id="message-bubble">
						<div className="message-bubble--flexbox">
							<Avatar className="message-bubble--avatar" image="http://unsplash.it/32/32" />
							<p>{this.props.text}</p>

						</div>
					</div>
				</div>

		);
	}
}

export default MessageBubble;
