import React from 'react';
import auth from '../../auth.js'
import api from '../../api.js'
import { browserHistory } from 'react-router'



//https://www.npmjs.com/package/react-facebook-login
import FacebookLogin from 'react-facebook-login';

const responseFacebook=(response)=>{
	console.log("responseFacebook", response)
	// Try and login user (using user id as password)
	auth.login(response.email, response.id)
	.then(res => {
		console.log(res, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

			browserHistory.push('/')

	}).catch(err => {

		let nameArr = response.name.split(" ");

		let signupObj = {
			username: response.email,
			email: response.email,
			password: response.id,
			language: 'en',
			firstName: nameArr[0],
			lastName: nameArr[1]
			// avatarUrl: "https://placeimg.com/100/100/animals"
		}

		console.log(signupObj, 'sign up object')
		//sends request object to src/api.js with form values for signup
		api.requestSignup(signupObj)
			.then(res => {
				console.log("signup response", res)
				browserHistory.push('/login')
				// after sign up logen them in
			})
			.catch(err  => {
				console.log("NO GO !!!!!!!!")
			})
	});

}

class Login extends React.Component {
	constructor(props) {
		super();
		this.state = {
			error : '',
			icon: ''
		}
	}

	_handleLogin = (e) => {

		e.preventDefault();
		console.log("start of function...")
		return auth.login(this.refs.email.value, this.refs.password.value)
			.then(res => {

				if(res === true) {
					browserHistory.push('/')
				}
			})
			.catch( err => {
				this.setState({
					error : err.errors,
					icon : <i className="fa fa-exclamation-triangle some--margin-login" aria-hidden="true"></i>
				})
			})
	}



	render() {
		return (
			<div className="login">
				<form className="form login--form">

					<input placeholder="e-mail" type="text" ref="email"/>

					<input placeholder="password" type="password" ref="password"/>
					<div className="form--button-container">
						<a className="form--button" onClick={e => this._handleLogin(e)}>login</a>

					</div>

					<p className="disclaimer">Dont have an account?<a href="/signup"> Signup here</a></p>

					<div className="error--margin">{this.state.icon}{this.state.error}</div>


					<div id="fb">
						<FacebookLogin
						appId="1311437462287493"
						autoLoad={false}
						fields="name,email,picture"
						callback={responseFacebook} />
					</div>

					<div className="some--margin-login">{this.state.icon}<span className="some--margin-login">{this.state.error}</span></div>
				</form>

			</div>
		)
	}
}

export default Login;
