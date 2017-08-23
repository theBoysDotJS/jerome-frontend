import openSocket from 'socket.io-client';

// export const socket = openSocket('https://theboyschatapp.herokuapp.com');
export const socket = openSocket('http://localhost:3001');

class Socket {

	sendMessage = (message) => {
		socket.emit('chat', message);
	}

	receiveMessage = () => {
		socket.on('chat', data => data)
	}

	sendTyping = (author) => {
		socket.emit('typing', author)
	}

	recieveTyping = () => {
		socket.on('typing', data => {
			let typeObj = {
				status: true,
				data: data
			}

			return typeObj;
		})
	}
}

export default new Socket();
