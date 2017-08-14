import React from 'react';
import superagent from 'superagent';

var API_HOST = "http://localhost:3000/signup"
class SignUp extends React.Component {
	constructor(props) {
		super();
		this.state = {
			error: ''
		};
	}

	requestSignup = (username, password, email) => (superagent.post(API_HOST).send({username, password, email}))

	_handleSignup = (e) => {

		e.preventDefault();
		this.requestSignup(this.refs.username.value, this.refs.password.value, this.refs.email.value).then(res => {
			console.log(res)
		})
	}
	render() {

		return (
			<div>
				<h1>
					Sign Up</h1>
				<form onSubmit={this._handleSignup}>
					EMAIL:<br></br>
					<input type="text" name="EMAIL" ref="email"/>
					<br></br>
					PASSWORD:
					<br></br>
					<input type="password" ref="password"/>
					<br></br>
					USERNAME:
					<br></br>
					<input type="text" ref="username"/>
					<br></br>
					<button type="submit">Sign Up</button>
					<p>{this.state.error}</p>
				</form>
			</div>
		);
	}
}

export default SignUp;
