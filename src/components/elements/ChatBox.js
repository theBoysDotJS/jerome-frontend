import React, {Component} from 'react';
import MessageBubble from '../assets/MessageBubble';
import Api from '../../api';
import {socket} from '../../socketHandle';
import Anime from '../../animate.js'

class ChatBox extends Component {
	constructor() {
		super()
		this.state = {
			messages: []
		}
	}

	componentDidMount() {

		console.log('mounted')
		socket.on('chat', data => {
			if(data.convoId === this.props.id) {
				data.text = data.text[localStorage.language]
				this.setState({
					messages: [
						...this.state.messages,
						data
					]
				})
				// console.log(this.state.messages, 'the message state')
			} // end if
		})

		Api.getMessages(this.props.id, localStorage.token)

			.then(data => JSON.parse(data.text))
			.then(data => {

			let messages = data.messages
			let messageArray = []
			if(messages.length > 0) {
				messages.forEach(currVal => {

					let newMsg = {
						user: currVal.author,
						text: currVal.message_body,
						id: currVal.id
					}

					messageArray.push(newMsg)
				})
			}
			this.setState({
				messages: messageArray
			})

		}) // end Promise
	} // end Component Did Mount

	createMessage = (curVal) => {
		console.log(curVal, 'whatever is being put into the message bubble');
		return (<MessageBubble user={curVal.user} text={curVal.text} key={curVal.messageId}/>);
	}
	displayMessages = () => {
		return this.state.messages.map(this.createMessage);
	}

	render() {

		return (
			<div className="chat-box">

				{/* SET CONTAINER HEIGHT AND WINDOW SCROLL TO BYPASS RENDER ERROR, ONLY PLACEHOLDER VALUE*/}
				<div >
					{this.displayMessages()}
				</div>
				<div>
					<p>{!!this.props.typing ? `Someone is typing` : null}</p>
				</div>

			</div>
		);
	}
}

export default ChatBox;
