import React from 'react';
import Api from '../../api.js';
import auth from '../../auth.js';
import {browserHistory} from 'react-router'
import onClickOutside from 'react-onclickoutside'


class CreateConvo extends React.Component {
	constructor(props) {
		super();
		this.state = {
			isOpened : false
		}
	}

	_submit = (e) => {
		e.preventDefault();
		console.log('hello')
		this.props.close(e);
		Api.createRoom(this.refs.name.value, localStorage.user, localStorage.token)
			.then(res => {

				// console.log(res.body, 'response from convo')
				Api.joinRoom(this.refs.friendInput.value, localStorage.token);

				browserHistory.push(`/conversation/${res.body.id}`)
			});
	}

	handleClickOutside = (e) => {
		if(this.props.isOpen){
			this.props.close(e)
		}
    //this.setState({ isOpened: false });
  }



	render() {
		return (
			<section id="settings" className={this.props.isOpen === true
				? "window-show"
				: "window-hide"}>
				<h2>Create a Conversation</h2>
					<form className="convo-form" onSubmit={e => this._submit(e)}>
						<input ref="name" placeholder="name" type="text"/>
						<div className="form--button-container">
							<button className="form--button" type="submit">create</button>
							<button className="close-convo form--button" onClick={this.props.close}>cancel</button>
						</div>
					</form>

			</section>

		);
	}
}


export default onClickOutside(CreateConvo);
