import React from 'react';
import api from '../../api.js'


class SignUp extends React.Component {
	constructor(props) {
		super();
		this.state = {
			error: ''
		};
	}

	_handleSignup = (e) => {

		e.preventDefault();

		let signupObj = {
			username: this.refs.username.value,
			email: this.refs.email.value,
			password: this.refs.password.value,
			language: this.refs.language.value,
			firstName: this.refs.firstName.value,
			lastName: this.refs.lastName.value
		}

		//sends request object to src/api.js with form values for signup
		api.requestSignup(signupObj)
			.then(res => {
				//figure out what we're doing here
				console.log(res)
			})
	}

	render() {

		return (
			<section className="sign-up">
				<h1>Sign Up</h1>
				<form className="sign-up--form" onSubmit={e => this._handleSignup(e)}>

					<label>firstName:</label>
					<input type="text" name="firstName" ref="firstName"/>

					<label>lastName:</label>
					<input type="text" name="lastName" ref="lastName"/>

					<label>E-mail:</label>
					<input type="text" name="email" ref="email"/>

					<label>Password:</label>
					<input type="password" name="password" ref="password"/>

					<label>Username:</label>
					<input type="text" name="username" ref="username"/>

					<label>Language:</label>
					<input type="text" name="language" ref="language"/>

					<button type="submit">Sign Up</button>
					<p className="sign-up--error">{this.state.error}</p>
				</form>
			</section>
		);
	}
}

export default SignUp;
