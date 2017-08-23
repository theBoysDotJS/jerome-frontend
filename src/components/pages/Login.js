import React from 'react';
import auth from '../../auth.js'
import { browserHistory } from 'react-router'

//https://www.npmjs.com/package/react-facebook-login
// import FacebookLogin from 'react-facebook-login';

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
				console.log(res, 'this is response')
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
						{/*<div id="fb">
							<FacebookLogin
							appId="1311437462287493"
							autoLoad={true}
							fields="name,email,picture"/>
						</div>*/}
					</div>
					<p className="disclaimer">Dont have an account?<a href="/signup"> Signup here</a></p>
					<div className="some--margin-login">{this.state.icon}<span className="some--margin-login">{this.state.error}</span></div>
				</form>

			</div>
		)
	}
}

export default Login;
