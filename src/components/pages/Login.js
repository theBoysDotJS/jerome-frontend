import React from 'react';
import api from '../../api.js'
import { browserHistory } from 'react-router'

//https://www.npmjs.com/package/react-facebook-login
import FacebookLogin from 'react-facebook-login';

class Login extends React.Component {
	constructor(props) {
		super();
	}

	_handleLogin = (e) => {
		e.preventDefault();

		api.requestLogin(this.refs.email.value, this.refs.password.value)
			.then(res => {
				res = true
				console.log(res)
				if(res === true) {
					browserHistory.push('/')
				}
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
					<p className="disclaimer">Don't have an account?<a href="/signup"> Signup here</a></p>
				</form>
			</div>
		)
	}
}

export default Login;
