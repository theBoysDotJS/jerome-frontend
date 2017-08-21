import React from 'react';
import Api from '../../api.js';
import auth from '../../auth.js';
import {browserHistory} from 'react-router'

class CreateConvo extends React.Component {

	_submit = (e) => {
		e.preventDefault();
		console.log('hello')
		this.props.close(e);
		Api.createRoom(this.refs.name.value, localStorage.user, localStorage.token)
			.then(res => {
				console.log(res.body, 'response from convo')
				Api.joinRoom(this.refs.friendInput.value, localStorage.token);
				browserHistory.push(`/conversation/${res.body.id}`)
			});
	}



	render() {
		return (
			<section id="settings" className={this.props.isOpen === true
				? "window-show"
				: "window-hide"}>
				<button onClick={this.props.close}>x</button>
				<h2>Create a Conversation</h2>
				<form onSubmit={e => this._submit(e)}>
					<input ref="name" placeholder="name" type="text"/>
					<input ref="friendInput" placeholder="who do you want to chat with?" type="text"/>
					<button type="submit">create!</button>
				</form>



			</section>
		);
	}
}

export default CreateConvo;
