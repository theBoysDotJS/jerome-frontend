import React, {Component} from 'react';
import MessageBubble from '../assets/MessageBubble';
import Infinite from 'react-infinite';
import Api from '../../api';
import Socket, {socket} from '../../socketHandle';
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
		console.log('mounted')
		socket.on('chat', data => {
			console.log(data, this.props.id, 'thedata')
			if(data.convoId === this.props.id) {
			this.setState({
				messages: [
					...this.state.messages,
					data
				]

			})
		} // end if
			// var newMsg = [ ...this.state.messages, data];
			console.log(this.state.messages, "these messages")
		})

		// socket.on('typing', data => {
		// 	console.log(this.props.typing, 'the typing state')
		// 	this.props.setTyping(true)
		//
		// 	if(this.props.typing === true) {
		// 		var typingSet = setTimeout( () => {
		// 			this.props.setTyping(false)
		// 		}, 4000)
		// 	}
		// })

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
		return (<MessageBubble user={curVal.user} text={curVal.text} key={curVal.id}/>);
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
