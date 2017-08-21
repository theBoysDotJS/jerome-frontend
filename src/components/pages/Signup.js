import React from 'react';
import api from '../../api.js'
import LanguageForm from "../assets/LanguageForm.js"
import { browserHistory } from 'react-router'


class SignUp extends React.Component {
	constructor(props) {
		super();
		this.state = {
			error: '',
			language: ''
		};
	}

	_handleSignup = (e) => {

		e.preventDefault();

		let signupObj = {
			username: this.refs.username.value,
			email: this.refs.email.value,
			password: this.refs.password.value,
			language: this.state.language,
			firstName: this.refs.firstName.value,
			lastName: this.refs.lastName.value
		}

		console.log(signupObj, 'the object')
		//sends request object to src/api.js with form values for signup
		api.requestSignup(signupObj)
			.then(res => {
				console.log(res)
			})
			.then(res => {
				res = true
				if(res === true) {
					browserHistory.push('/login')
				}
			})
			.catch(err  => {
				var errors = err.response.body.error;
					this.setState({
						error : errors
					})
			})
	}

	_handleLanguage = (e, lang) => {
		e.preventDefault();

		console.log(lang, 'this is what the form is doing')

		this.setState({
			language: lang
		})
	}

	render() {
		console.log(this.state.error)
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

					<LanguageForm language={this._handleLanguage}/>
					<div className="form--button-container">
						<button className="form--button" type="submit">Sign Up</button>
					</div>
					<p>Already have an account? <a href="/login">Login Here</a> </p>
					<div className="sign-up--error">{this.state.error && Object.keys(this.state.error).map(err => <p><strong>{err}</strong>: {this.state.error[err]}</p>)}</div>

				</form>
			</section>
		);
	}
}

export default SignUp;
