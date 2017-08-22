import React, {Component} from 'react';
import MessageBubble from '../assets/MessageBubble';
import Infinite from 'react-infinite';
import Api from '../../api';
import {socket} from '../../socketHandle';
import ReactDOM from 'react-dom';
import Anime from '../../animate.js';

class ChatBox extends Component {
	constructor() {
		super()
		this.state = {
			messages: []
		}

	}
	componentDidMount() {
		// console.log('mounted')

		Api.getMessages(this.props.id)
			.then(data => JSON.parse(data.text))
			.then(data => {

			let messages = data.messages
			let messageArray = []

			messages.forEach(currVal => {

				let newMsg = {
					user: currVal.author,
					text: currVal.message_body,
					id: currVal.id
				}
				messageArray.push(newMsg)

			}) // end forEach

			this.setState({
				messages: messageArray
			}) //end setState
		}) // end Promise

		socket.on('chat', data => {
			console.log(data, 'this is the message response')
			this.setState({
				messages: [
					...this.state.messages,
					data
				]

			})
		})
	} // end Component Did Mount

	createMessage = (curVal) => {
		console.log(curVal.user);
		return (<MessageBubble  user={curVal.user} text={curVal.text} key={curVal.id}/>);
	}
	displayMessages = () => {
		return this.state.messages.map(this.createMessage);
	}

	render() {

		return (

			<div className="chat-box">
				<div>
				<div className="infinite">
					{this.displayMessages()}
				</div>
			</div>
			</div>
		);
	}
}

export default ChatBox;
