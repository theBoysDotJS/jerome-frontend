import React, {Component} from 'react';
import MessageBubble from '../assets/MessageBubble';
import Api from '../../api';
import {socket} from '../../socketHandle';

class ChatBox extends Component {
	constructor() {
		super()
		this.state = {
			messages: []
		}
	}
	componentWillMount(){
		Anime.titleSwipe();
	}
	componentDidMount() {

		console.log('mounted')
		socket.on('chat', data => {
			// console.log(data, this.props.id, 'thedata')
			if(data.convoId === this.props.id) {
			this.setState({
				messages: [
					...this.state.messages,
					data
				]

			})
		} // end if
			// var newMsg = [ ...this.state.messages, data];
			// console.log(this.state.messages, "these messages")
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
			let messageArray = []

			messages.forEach(currVal => {

				let newMsg = {
					user: currVal.author,
					text: currVal.message_body,
					id: currVal.id
				}
				messageArray.push(newMsg)

			}) // end forEach
			.then
				this.setState({
					messages: messageArray
				})
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
