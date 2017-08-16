import superagent from 'superagent';
import API_HOST from './config.js'

class Api {

	requestSignup = (userInfo) => (
		superagent
			.post(`${API_HOST}/users`)
			.send(
				{username: userInfo.username,
				 password: userInfo.password,
				 email: userInfo.email,
				 firstName: userInfo.firstName,
				 lastName: userInfo.lastName,
				 language: userInfo.language
			 	})
	)

	requestLogin = (username, password) => (
		superagent
			.post(`${API_HOST}/sessions`)
			.send({username, password})
	)

	getAllConvos = (token) => (
		superagent
			.get(`${API_HOST}/conversation/`)
			.set('authentication', token)
	)
}

export default new Api();
