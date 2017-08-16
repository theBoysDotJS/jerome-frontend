import superagent from 'superagent';
import API_HOST from './config.js'

class Api {

	requestSignup = (userInfo) => (
		superagent
			.post(API_HOST)
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
			.post(API_HOST)
			.send({username, password})
	)

	getMessages = (convoId) => (
		superagent
			.get(`${API_HOST}/conversation/${convoId}`)
	)
}


export default Api;
