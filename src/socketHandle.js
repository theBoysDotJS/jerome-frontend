import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3000');

class Socket {

	sendMessage = (message) => {
		socket.emit('chat', message);
	}

}

export default new Socket();
