import React, {Component} from 'react';
import MessageBubble from '../assets/MessageBubble';
import Api from '../../api';
import {socket} from '../../socketHandle';
import Anime from '../../animate.js';
import ReactDOM from 'react-dom';
var Infinite = require('react-infinite')


class ChatBox extends Component {
	constructor() {
		super()
		this.state = {
			messages: []
		}
	}
	scrollToBottom = () => {
		console.log('I should be scrolling here')
	  const node = ReactDOM.findDOMNode(document.getElementById('typeChecker'));
	  node.scrollIntoView({ behavior: "smooth" });
	}
	componentDidMount() {

		console.log('mounted')
		socket.on('chat', data => {
			if(data.convoId === this.props.id) {
				console.log(data, 'the data')
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
						id: currVal.id,
						avatar: currVal.avatarUrl
					}

					messageArray.push(newMsg)
				})
			}
			console.log(messageArray, '<<<<<<MSG')
			this.setState({
				messages: messageArray
			})

		}) // end Promise
	} // end Component Did Mount
	componentDidUpdate(){
		this.scrollToBottom();
	}
	createMessage = (curVal) => {
		return (<MessageBubble user={curVal.user} text={curVal.text} avatar={curVal.avatar} key={curVal.messageId}/>);
	}
	displayMessages = () => {
		return this.state.messages.map(this.createMessage);
	}

	render() {

		return (
			<div className="chat-box">

				{/* SET CONTAINER HEIGHT AND WINDOW SCROLL TO BYPASS RENDER ERROR, ONLY PLACEHOLDER VALUE*/}
				<Infinite displayBottomUpwards containerHeight={678.19} elementHeight={89.03}>
					{this.displayMessages()}
				</Infinite>
				<div id="typeChecker">
					<p>{!!this.props.typing ? `Someone is typing` : null}</p>
				</div>

			</div>
		);
	}
}

export default ChatBox;
