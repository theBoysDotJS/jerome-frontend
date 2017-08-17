import React from 'react';
import api from '../../api.js'
import { browserHistory } from 'react-router'


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
			.then(res => {
				res = true
				if(res === true) {
					browserHistory.push('/login')
				}
			})
	}

	render() {

		return (
			<section className="sign-up">
				<form className="form sign-up--form" onSubmit={e => this._handleSignup(e)}>
					<div  className="form--container">
						<input placeholder="First Name" type="text" name="firstName" ref="firstName"/>
						<input placeholder="Last Name" type="text" name="lastName" ref="lastName"/>
					</div>

					<div className="form--container">
						<input placeholder="Password" type="password" name="password" ref="password"/>
						<input placeholder="Username" type="text" name="username" ref="username"/>
					</div>
					<input placeholder="E-mail" type="text" name="email" ref="email"/>

					<input placeholder="Language" type="text" name="language" ref="language"/>
					<div className="form--button-container">
						<button className="form--button" type="submit">Sign Up</button>
					</div>
					<p>Already have an account? <a href="/login">Login Here</a> </p>
					<p className="sign-up--error">{this.state.error}</p>
				</form>
			</section>
		);
	}
}

export default SignUp;
