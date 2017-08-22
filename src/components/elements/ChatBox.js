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
		socket.on('chat', data => {
			console.log(data, 'thedata')
			this.setState({
				messages: [
					...this.state.messages,
					data
				]

			})
			// var newMsg = [ ...this.state.messages, data];
			console.log(this.state.messages, "these messages")
		})
		Api.getMessages(this.props.id, localStorage.token)
			.then(data => JSON.parse(data.text))
			.then(data => {

			let messages = data.messages

			messages.forEach(currVal => {

				let newMsg = {
					user: currVal.author,
					text: currVal.message_body,
					id: currVal.id
				}

				this.setState({
					messages: [
						...this.state.messages,
						newMsg
					]
				}) //end setState
			}) // end forEach

		}) // end Promise
	}

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
				{/* SET CONTAINER HEIGHT AND WINDOW SCROLL TO BYPASS RENDER ERROR, ONLY PLACEHOLDER VALUE*/}
				<div className="infinite">
					{this.displayMessages()}
				</div>
			</div>
		);
	}
}

export default ChatBox;
