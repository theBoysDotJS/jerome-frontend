import superagent from 'superagent';
import API_HOST from './config.js'

class Api {
	//AUTH REQUESTS

	//signup a new user
	requestSignup = (userInfo) => (
		superagent
			.post(`${API_HOST}/auth/users`)
			.send(
				{username: userInfo.username,
				 password: userInfo.password,
				 email: userInfo.email,
				 firstName: userInfo.firstName,
				 lastName: userInfo.lastName,
				 language: userInfo.language
			 	})
	)

	//login an existing user
	requestLogin = (username, password) => (
		superagent
			.post(`${API_HOST}/auth/sessions`)
			.send({username, password})
	)


	getMessages = (convoId) => (
		superagent
			.get(`${API_HOST}/conversation/${convoId}`)
	)


	//requests logout for user
	deleteSession = (token) => (
		superagent
			.post(`${API_HOST}/auth/sessions`)
			.set('authorization', token)
	)

	//returns a full user object
	getMe = (token) => (
		superagent
			.get(`${API_HOST}/auth/me`)
			.set('authorization', token)
	)

	//CONVERSATION REQUESTS

	//retrieve a list of all conversations a particular user is part of
	getAllConvos = (token) => (
		superagent
			.get(`${API_HOST}/conversation/`)
			.set('authentication', token)
	)

	//create a new room
	createRoom = (name, admin, token) => (
		superagent
			.post(`${API_HOST}/conversation/`)
			.send(name, admin)
			.set('authorization', token)
	)

	//request for a user to join a room
	joinRoom = (username, token) => (
		superagent
			.post(`${API_HOST}/conversation/:id`)
			.send(username)
			.set('authorization', token)
	)

	//request to leave or kick a user from a chatroom
	deleteRoom = (token, leavingUserId) => {
		superagent
			.patch(`${API_HOST}/conversation/:id`)
			.send(leavingUserId)
			.set('authorization', token)
	}

	//request to delete a chatroom
	deleteRoom = (token) => {
		superagent
			.delete(`${API_HOST}/conversation/:id`)
			.set('authorization', token)
	}

	//MESSAGE REQUESTS

	//create a message
	sendMessage = (author, type, message, token) => {
		superagent
			.post(`${API_HOST}/messages`)
			.send(author, type, message)
			.set('authorization', token)
	}

	//Edit a message
	editMessage = (message, token) => {
		superagent
			.patch(`${API_HOST}/messages/:id`)
			.send(message)
			.set('authorization', token)
	}

	//Delete a message
	deleteMessage = (token) => {
		superagent
			.delete(`${API_HOST}/messages/:id`)
			.set('authorization', token)
	}

}

export default new Api();
