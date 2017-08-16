import React from 'react';
import api from '../../api.js'

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
				//get token from response
				console.log(res)
			})
	}

	render() {
		return (
			<div className="login">
				<form className="login--form">
					<input type="text" ref="email"/>
					<input type="password" ref="password"/>
					<div id="fb">
						login with facebook:
						<FacebookLogin
						appId="1311437462287493"
						autoLoad={true}
						fields="name,email,picture"/>
					</div>
					<button onClick={e => this._handleLogin(e)}>login</button>
					<p>Don't have an account? <a href="/signup">Signup here </a> </p>
				</form>
			</div>
		)
	}
}

export default Login;
