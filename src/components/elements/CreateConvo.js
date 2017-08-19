import React from 'react';
import Api from '../../api.js';
import auth from '../../auth.js';

class CreateConvo extends React.Component {

	_submit = (e) => {
		e.preventDefault();
		this.props.close
		Api.createRoom(this.refs.name.value, localStorage.user, localStorage.token);
		Api.joinRoom(this.refs.friendInput.value, localStorage.token);
	}

	_isAdmin = () => {
		console.log('its working')
		if (auth.isLoggedIn() === true && +localStorage.user === 2) {
			return true;
		}
		return false;
	}

	_handleNewUser = () => {
		Api.joinRoom(this.refs.addUser.value).then(res => {
			console.log(res)
		})
	}

	_handleKickUser = () => {
		Api.deleteFromRoom(this.refs.removeUser.value)
			.then(res => {
				console.log(res)
			})
	}

	render() {
		return (
			<section id="settings" className={this.props.isOpen === true
				? "window-show"
				: "window-hide"}>
				<button onClick={this.props.close}>x</button>
				<h2>Create a Conversation</h2>
				<form onSubmit={this._submit}>
					<input ref="name" placeholder="name" type="text"/>
					<input ref="friendInput" placeholder="who do you want to chat with?" type="text"/>
					<button type="submit">create!</button>
				</form>

				{!!this._isAdmin()
					? <form action="">
							<p>Add a user</p>
							<input ref="addUser" type="text" name="username" placeholder="add a user"/>
							<button onClick={e => this._handleNewUser(e)}></button>

							<p>Remove a user</p>
							<input ref="removeUser" type="text" name="username" placeholder="add a user"/>
							<button onClick={e => this._handleKickUser(e)}></button>
					  </form>
					: null}

			</section>

		);
	}
}

export default CreateConvo;
