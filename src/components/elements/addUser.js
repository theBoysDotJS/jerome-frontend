import React from 'react';
import Api from '../../api.js';


class AddUser extends React.Component {

	_submit = (e) => {
		e.preventDefault();
		this.props.close(e);
		Api.joinRoom(this.refs.user.value, localStorage.token)
			.then(res => {
				console.log(res.body)
				});
	}



	render() {
		return (
			<section id="settings" className={this.props.isOpen === true
				? "window-show"
				: "window-hide"}>
				<h2>Add a user</h2>
				<form className="convo-form" onSubmit={e => this._submit(e)}>
					<input ref="user" placeholder="user id" type="text"/>
					<div classname="form--button-container">
					<button className="form--button" type="submit">Add</button>
					<button  className="form--button" onClick={this.props.close}>Cancel</button>
					</div>
				</form>



			</section>

		);
	}
}


export default AddUser;
