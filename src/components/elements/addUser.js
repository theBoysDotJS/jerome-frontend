import React from 'react';
import Api from '../../api.js';


class AddUser extends React.Component {

	_submit = (e) => {
		e.preventDefault();
		this.props.close(e);
		Api.joinRoom(this.refs.user.value, this.props.id.id, localStorage.token)
			.then(res => {
				console.log(res.body)
				});
	}



	render() {
		return (
			<section id="settings" className={this.props.isOpen === true
				? "window-show"
				: "window-hide"}>
				<button onClick={this.props.close}>x</button>
				<h2>Add a user</h2>
				<form onSubmit={e => this._submit(e)}>
					<input ref="user" placeholder="your friend's user id goes here" type="text"/>
					<button type="submit">Add</button>
				</form>



			</section>

		);
	}
}


export default AddUser;
